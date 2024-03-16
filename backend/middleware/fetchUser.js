const jwt = require('jsonwebtoken');
const JWT_TOKEN = 'taskmanager';

const fetchUser = (req, res, next) => {
    const token = req.header('auth-token');
    if (!token) {
        return res.status(401).json({ error: "Please provide a valid token" });
    }
    try {
        const data = jwt.verify(token, JWT_TOKEN);
        req.user = data.user;
        next();
    } catch (error) {
        return res.status(401).json({ error: "Invalid token" });
    }
};

module.exports = fetchUser;
