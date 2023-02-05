const userModel = require("../models/signupModel");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")



const signup = async(req,res)=>{
   //Existing user check
   //hashed password
   //user creation
   //Token Generation
   const {username,email,password} = req.body
   try{
      const existingUser = await userModel.findOne({email:email})
      if(existingUser){
         return res.status(400).json({message:"user already exist"})
      }
      const hashedPassword = await bcrypt.hash(password,10);
      const result = await userModel.create({
         email:email,
         password:hashedPassword,
         username:username
      })
      const token = jwt.sign({email:result.email,id:result._id},process.env.SECRET_KEY)
      res.status(201).json({user:result,token:token})

   }catch(err){
      console.log(err)
      res.status(500).json({message:"something went wrong"})
   }
}


const login = async(req,res)=>{
   const {email,password} = req.body

   try{
      const existingUser = await userModel.findOne({email:email})
      if(!existingUser){
         return res.status(400).json({message:"user does not exist"})
      }
      const matchedPassword = await bcrypt.compare(password,existingUser.password)
      if(!matchedPassword){
         return res.status(400).json({message:"Invalid credentials"})
      }
      const token = jwt.sign({email:existingUser.email   ,  id:existingUser._id},process.env.SECRET_KEY);
      res.status(201).json({user:existingUser   , token:token})
   }catch(err){
      console.log(err)
      res.status(500).json({message:"something went wrong"})
   }
}

const getAllUser = async (req,res)=>{
   
      try {
         const user = await userModel.find()
         res.json(user)
      } catch (error) {
         res.json(error);
      }
      
   }
const getUserById = async (req,res)=>{
   
   const id = req.params.courseId
   
   try {
       const userById = await userModel.findById(id)
      res.json(userById)
   } 
   catch (error) {
      res.json(error);
   }

}


module.exports = {signup,login,getAllUser,getUserById }