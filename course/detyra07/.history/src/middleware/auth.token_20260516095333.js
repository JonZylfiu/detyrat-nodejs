function authToken(req,res,next){
    const authHeader = req.header.authorization;

    "Bearer eykdksklasdjlsajdakld"

    const token = authHeader.split(" ")[1];
    if(!token){
        res.status(401).json({message: "Token not provided"})
    }

    try{
        const decodedToken = 
    }
    catch(){

    }
    //req.body
    //req.params.
}