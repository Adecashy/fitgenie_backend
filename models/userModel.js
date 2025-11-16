const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: 6,
        select: false
    },
    age: {
        type: Number
    },
    gender: {
        type: String,
        enum: ["male", "female"]
    },
    height: {
        type: Number
    },
    weight: {
        type: Number
    },
    goal: {
        type: String,
        enum: ["weight loss", "weight gain"]
    },
    dietPreference:{
        type: String,
        enum: ["vegetarian", "vegan", "keto", "paleo", "none"],
        default: "none"
    },
    activityLevel: {
        type: String,
        enum: ["light", "sedentary", "moderate", "active"],
        default: "light"
    },
    planAccess: {
        type: String,
        enum: ["free", "premium"],
        default: "free"
    }
})

const userModel = mongoose.model("users", userSchema)

module.exports = userModel 