const { User } = require("../db")

async function userMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const username = req.headers.username;
    const password = req.headers.password;
    
        const user = await User.findOne({ username, password });
        if (user) {
            next();
        } else {
            res.status(403).json({
                msg: "Incorrect credentials or User doesn't exist"
            });
        }
     
}

module.exports = userMiddleware;