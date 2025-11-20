const express = require("express")
const { updateUserProfile, getUserById, getUserProfile, } = require("../controllers/userController");
const isLoggedIn = require("../middlewares/isLogged");

const userRouter = express.Router()

userRouter.put("/:id/profile", isLoggedIn, updateUserProfile)
userRouter.get("/profile/:id", isLoggedIn, getUserById)
userRouter.get("/my-profile", isLoggedIn, getUserProfile)

module.exports = userRouter