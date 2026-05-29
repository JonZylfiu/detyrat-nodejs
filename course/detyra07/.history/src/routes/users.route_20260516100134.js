const express = require("express");
const userController = require("../controllers/users.controller");
const authToken = require("../middleware/auth.token");

const router = express.Router();

//locahost:3000/users - method GET
router.get("/", userController.getAllUsers);

//localhost:3000/users/id- METHOD GET
// router.get("/:id", getAllUsers());


module.exports = router;
