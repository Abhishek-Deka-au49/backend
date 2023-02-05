const express = require("express");
const app = express()
const bodyParser = require("body-parser");
const userRouter = require("./routes/userRoute")


const dotenv = require("dotenv");
dotenv.config();


const { connectDB } = require("./dbConfig");
connectDB()




//Middleware
app.use(bodyParser.json())
app.use("/user", userRouter )


const PORT = process.env.PORT || 5050

app.listen(PORT,()=>{
   console.log("application is running fine at port 5050 ")
})