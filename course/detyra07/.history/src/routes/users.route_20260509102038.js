const express = require("express");
const userController = require("../controllers/users.controller");

const router = express.Router();

//locahost:3000/users - method GET
router.get("/", userControllerController.getAllUsers());

//localhost:3000/users/id- METHOD GET
router.get("/:id", getAllUsers());


module.exports = router;