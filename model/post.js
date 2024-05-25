const mongoose = require('mongoose')

const postSchema = new mongoose.Schema(
    {
      title :{
        type:String,
        require:true
      },
      desc:{
        type:String,
        require:true
      }
      ,img:{
        type:String,
        require:true
      },
      username:{
        type:String,
        required:true
      }
     },
     {timestamps:true}
)

const post = mongoose.model(postmodel,postSchema);

module.exports=post;