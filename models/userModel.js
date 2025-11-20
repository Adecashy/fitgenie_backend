const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
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
        enum: ["vegetarian", "balanced", "vegan", "high_protein", "gluten_free", "none"],
        default: "none"
    }, 
    timePerDay: {
        type: Number,
        min: 1
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
    },
    subscription: {
        status: {
            type: String,
            enum: ["inactive", "pending", "active"],
            default: "inactive"
        },
        plan: {
            type: String,
            enum: ["quarterly", "monthly", "yearly"]
        },
        startDate: Date,
        endDate: Date,
        reference: String
    }
})

const userModel = mongoose.model("users", userSchema)

module.exports = userModel 