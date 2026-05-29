const users = require("../database/users");

function getAllUsersService (){
        return users;
}


module.exports = {
    getAllUsersService
};