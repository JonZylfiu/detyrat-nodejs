const jwt = require("jsonwebtoken");
const JWT_SECRET_KEY = "some-text-for-json-token-secret";
function authToken(req,res,next){
    const authHeader = req.header.authorization;

    "Bearer eykdksklasdjlsajdakld"

    const token = authHeader.split(" ")[1];
    if(!token){
        res.status(401).json({message: "Token not provided"});
    }

    try{
        const decodedToken = jwt.verify(token,JWT_SECRET_KEY);    }
    catch(){

    }
    //req.body
    //req.params.
}