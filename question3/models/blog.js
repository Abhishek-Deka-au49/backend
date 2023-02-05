const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
   title: {
      type:String,
      require:true
   },
   descriptionandContent:[String],
    
   createdBy:{
      type:String,
   },
   isPrivate:{
      type:Boolean,
      default:false
   },
   createdAt: {
      type: Date,
      default: Date.now()
   }
})

const blogModel = mongoose.model("details",blogSchema)
module.exports = blogModel;