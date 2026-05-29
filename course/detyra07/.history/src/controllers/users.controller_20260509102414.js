
const userService = require("../services/users.service");

function getAllUsers() {
    const users = userService.getAllUsersService();
    return users;
}


module.exports = {
    getAllUsers
};