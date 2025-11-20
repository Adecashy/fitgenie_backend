const express = require("express")
const isLoggedIn = require("../middlewares/isLogged")
const { createFitnessPlan, getFitnessPlanHistory, getLatestPlanHistory } = require("../controllers/fitPlanController")
const isActiveSubscriber = require("../middlewares/subscription")
const fitPlanRouter = express.Router()

fitPlanRouter.post("/create", isLoggedIn, isActiveSubscriber, createFitnessPlan)
fitPlanRouter.post("/history", isLoggedIn, isActiveSubscriber, getFitnessPlanHistory)
fitPlanRouter.post("/latest", isLoggedIn, isActiveSubscriber, getLatestPlanHistory)

module. exports = fitPlanRouter