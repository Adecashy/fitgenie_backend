const mongoose = require("mongoose")

const exerciseSchema = new mongoose.Schema({
    name: { type: String, required: true},
    sets: { type: String, required: true},
    reps: { type: String, required: true}
}, { _id: false });

const workoutDaySchema = new mongoose.Schema({
    day: { type: String, required: true },
    focus: { type: String, required: true },
    exercise: { type: [exerciseSchema], required: true }
}, { _id: false });

const mealSchema = new mongoose.Schema({
    meal:{ type: String, required: true },
    meal:{ type: [String], required: true }
}, { _id: false });

const weekSchema = new mongoose.Schema({
    week: { type: Number, required: true },
    workout: { type: [workoutDaySchema], required: true },
    nutrition: {
        dailyCalories: { type: Number, required: true },
        macros: {
            protein: { type: String, required: true },
            carbs: { type: String, required: true },
            fat: { type: String, required: true }
        },
        meals: { type: [mealSchema], required: true }
    }
}, { _id: false });

const fitnessPlanSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
    summary: {
        goal: { type: String, required: true },
        durationDays: { type: Number, default: null },
        timePerDay: { type: Number, required: true },
        dietPreference: { type: String, required: true }
    },
    weeklyPlan: { type: [weekSchema], required: true },
    tips: { type: [String], required: true },
    createdAt: { type: Date, default: Date.now }
});

const fitnessPlanModel = mongoose.model("fitnessPlan", fitnessPlanSchema);
module.exports = fitnessPlanModel;