const express = require("express");
const blogRouter = express.Router()
const blogModel = require("../models/blog")


//get all the blogs
blogRouter.get("/blogs",async (req,res)=>{
   try {
      const course = await blogModel.find()
      res.json(course)
   } catch (error) {
      res.json(error);
   }
   
})

//get single blog
blogRouter.get("/blogs/:blogId",async (req,res)=>{
   
   const id = req.params.blogId
   
   try {
       const singleBlog = await blogModel.findById(id)
      res.json(singleBlog)
   } 
   catch (error) {
      res.json(error);
   }

})


//create blog

blogRouter.post("/blogs", async (req,res)=>{
   try {
      const newBlog = await blogModel.create(req.body)
      res.json(newBlog)  
   } catch (error) {
      res.json(error)
   }
})


//delete blog

blogRouter.delete("/blogs/:blogId", async(req,res)=>{
   try {
      await blogModel.remove({ _id:req.params.blogId })
      res.status(200).json({
         message:"blog deleted successfully",
      })
   } catch (error) {
      res.json(error)
   }
})




//update blog
blogRouter.put("/blogs/:blogId",async(req,res)=>{
   
   const blogId = req.params.blogId
   try {
      const updatedBlog = await blogModel.updateOne(
         {
         "_id":blogId
         },
         
         req.body
         
      );
         res.json(updatedBlog)
   } 
   catch (error) {
      res.json(error)
   }
})

blogRouter.get("/vlogs",async (req,res)=>{
   const {username,email,isPrivate,isPublic} = req.query
   try {
      const course = await blogModel.aggregate([
         {
            $match:{
               username:username,
               email:email,
               isPrivate:isPrivate,
               isPublic:isPublic
            }
         },
         {
            $count:"totals"
         }
        
      ])
      res.json(course)
   } catch (error) {
      res.json(error);
   }
   
})

module.exports = blogRouter