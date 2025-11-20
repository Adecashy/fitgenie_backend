const { generateObject } = require("ai")
const { googleAi } = require("../config/gemini")
const { fitnessPlanAiPrompt } = require("../utils/aiprompts")
const { aiPlanSchema } = require("../schemas/fitnessPlanSchema")
const fitnessPlanModel = require("../models/fitnessPlanModel")

const createFitnessPlan = async (req, res) => {
    try {
        const user = req.user
        const { age, gender, height, weight, goal, dietPreference, timePerDay } = user
        const requiredFields = { age, gender, height, weight, goal, dietPreference, timePerDay }

        for (const key in requiredFields) {
            if (!requiredFields[key]) {
                return res.status(400).json({
                    message: `${key} is required, kindly update your profile`
                })
                
            }
        }
        
        const response = await generateObject({
            model: googleAi("gemini-2.5-flash"),
            prompt: fitnessPlanAiPrompt(user),
            schema: aiPlanSchema
        })

        const plan = response.object

        //save plan to DataBase
        const savedPlan = await fitnessPlanModel.create({
            userId: user._id,
            ...plan
        })

        res.status(200).json({ success: true, message: "fitPlan generated successfully", plan: savedPlan })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message || "Internal Server Error" })
    }
};

const getFitnessPlanHistory = async (req, res) => {
    try {
        const userId = req.user._id

        const plans = await fitnessPlanModel.find({ userId }).sort({ createAt: -1 })

        res.status(200).json({
            success: true,
            count: plans.length,
            plans
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: "Unable to fetch history"})
    }
};

const getLatestPlanHistory = async (req, res) => {
    try {
        const userId = req.user._id

        const latestPlan = await fitnessPlanModel.findOne({ userId }).sort({ createAt: -1 })

        if (!latestPlan) {
            return res.status(404).json({
                success: false,
                message: "no fitness plan found"
            })
        }
        res.status(200).json({
            success: true,
            plan: latestPlan
        })
    } catch (error) {
        res.status(500).json({ success: false, message: "unable to fetch latest plan", error })
    }
}

module.exports = { createFitnessPlan, getFitnessPlanHistory, getLatestPlanHistory }