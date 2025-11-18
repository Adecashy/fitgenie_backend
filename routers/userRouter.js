const express = require("express")
const { updateUserProfile } = require("../controllers/userController");
const isLoggedIn = require("../middlewares/isLogged");

const userRouter = express.Router()

userRouter.put("/:id/profile", isLoggedIn, updateUserProfile)

module.exports = userRouter