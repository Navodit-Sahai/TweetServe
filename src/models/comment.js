const mongoose=require('mongoose');

const commentSchema= new mongoose.Schema({
    content:{
        type:String,
        require:true
    },
    userEmail:{
        type:'String'
    },
    likes:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Like'
        }]
},{timestamps:true});
const Comment=mongoose.model('Comment',commentSchema);
module.exports=Comment;