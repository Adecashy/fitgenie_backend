const userModel = require("../models/userModel")

const getUserById = async(req,res)=>{
    const { id }= req.params
    try {
        const user = await userModel.findById(id)
        if(!user){
            return res.status(404).json({
                success:false,
                message:"No user found"
            })
        }
        res.status(200).json({
            success:true,
            message:"User fetched successfully",
            user
        })
    } catch (error) {
        console.log(error)
    }
}

const getUserProfile = (req, res) => {
    const user = req.user
    try {
       if(!user){
            return res.status(404).json({
                success: false,
                message: "user not found"
            })
        }
        return res.status(200).json(user) 
    } catch (error) {
        console.log(error)
    }
}

const updateUserProfile = async (req, res) => {
   try {
    const userId = req.user._id
    const updateData = req.body

    const { age, gender, height, weight, goal, dietPreference, timePerDay } = updateData
    if (!age) return res.status(400).json({ success: false, message: "age is required" })
    if (!gender) return res.status(400).json({ success: false, message: "gender is required" })
    if (!height) return res.status(400).json({ success: false, message: "height is required" })
    if (!weight) return res.status(400).json({ success: false, message: "weight is required" })
    if (!goal) return res.status(400).json({ success: false, message: "goal is required" })
    if (!dietPreference) return res.status(400).json({ success: false, message: "dietPreference is required" })
    if (!timePerDay) return res.status(400).json({ success: false, message: "timePerDay is required" })
   
    const updatedUser = await userModel.findByIdAndUpdate(userId, updateData, { new: true })
    if (!updatedUser) {
        return res.status(404).json({
            success: false,
            message: "unable to update profile"
        })
    }
    res.status(200).json({
        success: true,
        message: "user profile updated successfully",
        updatedUser
    })
   } catch (error) {
        console.log(error)
   } 
}

module.exports = { 
    updateUserProfile,
    getUserById,
    getUserProfile
 }