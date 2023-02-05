const express = require("express");
const { signup, login, getAllUser, getUserById } = require("../controllers/userController");
const userRouter = express.Router()





userRouter.get("/",getAllUser)

userRouter.get("/:userId",getUserById)

userRouter.post("/signup", signup)
userRouter.post("/login", login)

module.exports = userRouter