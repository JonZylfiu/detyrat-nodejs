const jwt = require("jsonwebtoken");
const JWT_SECRET_KEY = "some-text-for-json-token-secret";
function authToken(req,res,next){
    const authHeader = req.header.authorization;
    const token = authHeader.split(" ")[1];
    if(!token){
        res.status(401).json({message: "Token not provided"});
    }

    try{
        const decodedToken = jwt.verify(token,JWT_SECRET_KEY);
        req.user = {
            email: decodedToken.payload.email,
            role : decodedToken.payload.role
        }
        next();
    
    }
    catch(err){
        res.status(400).json({message:err.message});

    }
}

module.exports = authToken