
const userService = require("../services/users.service");

function getAllUsers(req,res) {
    const {email, role} = req.body.user;    const users = userService.getAllUsersService();
    res.json(users);
}


module.exports = {
    getAllUsers
};