const express = require("express")
const isLoggedIn = require("../middlewares/isLogged")
const { initializeSubscription } = require("../controllers/subscriptionController")
const subscriptionRouter = express.Router()

subscriptionRouter.post("/initialize", isLoggedIn, initializeSubscription)

module.exports = subscriptionRouter
