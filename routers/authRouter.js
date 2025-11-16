const express = require("express")
const { userRegistration, login } = require("../controllers/authController")

const authRouter = express.Router()

authRouter.post("/signup", userRegistration)
authRouter.post("/login", login)


module.exports = authRouter