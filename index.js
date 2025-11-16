const express = require("express")
const cors = require("cors")
const app = express()
const dotenv = require("dotenv")
const connectToDb = require("./config/connectToDb")
const authRouter = require("./routers/authRouter")

dotenv.config()

const PORT = process.env.PORT
connectToDb()

app.use(cors())

app.listen(PORT, ()=> {
    console.log(`server running on port ${PORT}`)
})

app.use(express.json())

app.use("/api/auth", authRouter)














// http://localhost:7707/
//fitgenie_db_user, password: gkoH9SkITXajEhoX




