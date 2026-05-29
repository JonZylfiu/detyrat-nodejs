
const getAllUsersService = require("../services/users.service");

function getAllUsers(req,res) {
    const users = getAllUsersService();
    return users;
}


module.exports = getAllUsers;