const express = require('express');
const router = express.Router();
const User = require('../models/user');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fetchUser = require('../middleware/fetchUser');

const definedToken = 'taskmanager';

// POST: /api/users/create
// Create a new user
router.post('/create', [
    // Validation middleware
    body('name', 'Enter a valid name').isLength({ min: 2 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password should contain at least 5 characters').isLength({ min: 5 }),
], async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ success: false, errors: errors.array() });
        }

        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        const newUser = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
        });

        const tokenPayload = {
            user: {
                id: newUser.id
            }
        };

        const authToken = jwt.sign(tokenPayload, definedToken);
        res.json({ success: true, authToken });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ success: false, error: 'Server Error' });
    }
});

// POST: /api/users/login
// User login
router.post('/login', [
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Enter a valid password').exists(),
], async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ success: false, errors: errors.array() });
        }

        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ success: false, error: 'User not found' });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(400).json({ success: false, error: 'Invalid credentials' });
        }

        const tokenPayload = {
            user: {
                id: user.id
            }
        };

        const authToken = jwt.sign(tokenPayload, definedToken);
        res.json({ success: true, authToken });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ success: false, error: 'Server Error' });
    }
});

// POST: /api/users/getuser
// Get user details
router.post('/getuser', fetchUser, async (req, res) => {
    try {
        const userID = req.user.id;
        const user = await User.findById(userID).select('-password');
        res.json({ success: true, user });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ success: false, error: 'Server Error' });
    }
});

module.exports = router;
