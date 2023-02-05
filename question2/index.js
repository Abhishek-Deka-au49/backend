const express = require("express");
const app = express()
const blogRouter = require("./routes/blogRouter")
const bodyParser = require("body-parser")


const dotenv = require("dotenv");
dotenv.config();

const { connectDB } = require("./dbConfig");
connectDB()

//middleware
app.use(bodyParser.json())
app.use("/api", blogRouter);

const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
   console.log("application is running fine at port 5000 ")
})