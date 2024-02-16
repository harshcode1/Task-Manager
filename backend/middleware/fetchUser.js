const jwt = require('jsonwebtoken')
const JWT_TOKEN = 'taskmanager';

const fetchUser = (req,res,next) => {
    // Now here we will give a Token which will be checked if it's true using req 
    const token = req.header('auth-token');  // Auth-Token is there in the request Header..
    if(!token){
        res.status(401).json({error:"Please Enter a Valid Token"});
    }
    try{
        const data = jwt.verify(token,JWT_TOKEN);
        req.user = data.user
        next();
    }catch (error){
        console.log(error.message + "Some Error Occured");
    }
}

module.exports = fetchUser;