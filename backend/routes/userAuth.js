const express = require('express');
const router = express.Router();
const User = require('../models/user');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const fetchUser = require('../middleware/fetchUser');

const definedToken = 'taskmanager'


// GET Request :- The data is requested from the server may it be webpage or any other resource....
// POST Request :- The data is submitted to to the server and it is send through request body not visible through URL unlike get request.

router.post('/createuser', [
    body('name', 'Enter a Valid NAME').isLength({ min: 2 }),
    body('email', 'Enter a Valid EMAIL').isEmail(),
    body('password', 'Password should contain atleast 5 Characters').isLength({ min: 5 }),
], async (req, res) => {
    try {
        let success = false;
        const result = validationResult(req)
        if (!result.isEmpty()) {
            res.status(400).json({ success, error: result.array() })
        }

        const salt = bcrypt.genSaltSync(10);
        const securedPassword = await bcrypt.hash(req.body.password, salt);

        const newUser = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: securedPassword,
        })

        const data = {
            user: {
                id: newUser.id
            }
        }

        const authtoken = jwt.sign(data, definedToken);
        success = true;
        res.json({ success, "authtoken": authtoken });
    } catch (error) {
        console.log(error.message + "This ERROR has occured");
    }
})

module.exports = router;