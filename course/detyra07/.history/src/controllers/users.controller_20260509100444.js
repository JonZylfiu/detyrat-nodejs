
const getAllUsersService = require("../services/users.service");

function getAllUsers() {
    const users = getAllUsersService();
}


module.exports = getAllUsers;