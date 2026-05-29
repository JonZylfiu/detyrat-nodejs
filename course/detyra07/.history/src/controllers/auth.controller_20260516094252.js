const users = require("../database/users");
const jwt = require("jsonwebtoken");

const JWT_SECRET_KEY = "some-text-for-json-token-secret";
function login(req,res){
    const {email, password} = req.body;

    const user = users.find((u)=> u.email === email && u.password === password);

    if(!user){
        res.status(404).json({message:"User not found"});
    }

    jwt.sign({
        email: email,
        role: role
    }, "")



}