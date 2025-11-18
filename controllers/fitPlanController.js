const { generateObject } = require("ai")
const { googleAi } = require("../config/gemini")
const { fitnessPlanAiPrompt } = require("../utils/aiprompts")
const { aiPlanSchema } = require("../schemas/fitnessPlanSchema")

const createFitnessPlan = async (req, res) => {
    try {
        const user = req.user
        const { age, gender, height, weight, goal, dietPreference, timePerDay } = user
        if(!age) return res.status(400).json({ success: false, message: "age is required. Please update your profile."})
        if(!gender) return res.status(400).json({ success: false, message: "gender is required. Please update your profile."})
        if(!height) return res.status(400).json({ success: false, message: "height is required. Please update your profile."})
        if(!weight) return res.status(400).json({ success: false, message: "weight is required. Please update your profile."})
        if(!goal) return res.status(400).json({ success: false, message: "goal is required. Please update your profile."})
        if(!dietPreference) return res.status(400).json({ success: false, message: "dietPreference is required. Please update your profile."})
        if(!timePerDay) return res.status(400).json({ success: false, message: "timePerDay is required. Please update your profile."})
        
        const response = await generateObject({
            model: googleAi("gemini-2.5-flash"),
            prompt: fitnessPlanAiPrompt(user),
            schema: aiPlanSchema
        })
        res.status(200).json({ plan: response.object, response })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message || "Internal Server Error" })
    }
}

module.exports = { createFitnessPlan }