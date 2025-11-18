const express = require("express")
const isLoggedIn = require("../middlewares/isLogged")
const { createFitnessPlan } = require("../controllers/fitPlanController")
const fitPlanRouter = express.Router()

fitPlanRouter.post("/create", isLoggedIn, createFitnessPlan)

module. exports = fitPlanRouter