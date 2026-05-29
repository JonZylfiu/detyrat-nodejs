const users = require("../database/users");
function login(req,res){
    const {email, password} = req.body;

    const user = users.find((u)=>u.email === email && u.password === password);
}