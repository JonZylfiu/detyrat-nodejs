const express = require("express");
const getAllUsers = require("../controllers/users.controller");

const router = express.Router();

//locahost:3000/users - method GET
router.get("/users", getAllUsers());


module.exports = router;