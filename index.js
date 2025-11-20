const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const app = express()
const dotenv = require("dotenv")
const connectToDb = require("./config/connectToDb")
const authRouter = require("./routers/authRouter")
const userRouter = require("./routers/userRouter")
const fitPlanRouter = require("./routers/fitPlanRouter")
const subscriptionRouter = require("./routers/subscriptionRouter")
const { activateSubscription } = require("./controllers/subscriptionController")

dotenv.config()

const PORT = process.env.PORT
connectToDb()

app.post(
    "api/subscription/webhook",
    express.raw({ type: "*/*" })), //keep body as buffer 
    activateSubscription

app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(morgan("dev"))

app.listen(PORT, ()=> {
    console.log(`server running on port ${PORT}`)
})

app.use(express.json())

app.use("/api/auth", authRouter)
app.use("/api/users", userRouter)
app.use("/api/fit-plan", fitPlanRouter)
app.use("/api/subscription", subscriptionRouter)


app.get("/", (req, res)=> {
    res.send("welcome to Node class Api")
})


//push














// http://localhost:7707/
//fitgenie_db_user, password: gkoH9SkITXajEhoX




