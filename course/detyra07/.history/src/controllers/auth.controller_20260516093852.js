const users = require("../database/users");
function login(req,res){
    const {email, password} = req.body;

    const user = users.find((u)=> u.email === email && u.password === password);

    if(!user){
        res.status(404).json({message:"User not found"});
    }

}