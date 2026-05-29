
const getAllUsersService = require("../services/users.service");

function getAllUsers() {
    const users = getAllUsersService();
    return users;
}


module.exports = getAllUsers;