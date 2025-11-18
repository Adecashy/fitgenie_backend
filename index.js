const express = require("express")
const cors = require("cors")
const app = express()
const dotenv = require("dotenv")
const connectToDb = require("./config/connectToDb")
const authRouter = require("./routers/authRouter")
const userRouter = require("./routers/userRouter")
const fitPlanRouter = require("./routers/fitPlanRouter")

dotenv.config()

const PORT = process.env.PORT
connectToDb()

app.use(cors())

app.listen(PORT, ()=> {
    console.log(`server running on port ${PORT}`)
})

app.use(express.json())

app.use("/api/auth", authRouter)
app.use("/api/users", userRouter)
app.use("/api/fit-plan", fitPlanRouter)


app.get("/", (req, res)=> {
    res.send("welcome to Node class Api")
})


//push














// http://localhost:7707/
//fitgenie_db_user, password: gkoH9SkITXajEhoX




