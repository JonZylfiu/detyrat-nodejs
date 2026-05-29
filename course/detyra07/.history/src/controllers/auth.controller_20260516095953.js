const users = require("../database/users");
const jwt = require("jsonwebtoken");

const JWT_SECRET_KEY = "some-text-for-json-token-secret";
function login(req,res){
    const {email, role} = req.body;

    const user = users.find((u)=> u.email === email && u.role === role);

    if(!user){
        res.status(404).json({message:"User not found"});
    }

   const token =  jwt.sign({
        email: user.email,
        role: user.role
    }, JWT_SECRET_KEY);

    res.status(200).json({
        token: token,
        user:{
            email: user.email,
            id: user.id,
            role: user.role
        }
    })





}