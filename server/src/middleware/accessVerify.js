const cookieparser = require("cookie-parser")
const jwt = require("jsonwebtoken")

const verifyJWT = (req,res,next) => {
    const accessToken = req.cookies.accessToken;

    if(!accessToken){
        return res.status(401).json({message: "Session Invalid. Please Login Again!", type: "warning"})
    }

    jwt.verify(accessToken, process.env.ACCESS_SECRET, (err, user) => {
        if(err){
            return res.status(403).json({message: "Session Not Valid", type: "warning"})
        }

        req.user = user

        next();
    })

}

module.exports = verifyJWT