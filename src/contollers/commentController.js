const CommentService=require('../services/comment-service');

const commentService=new CommentService();
const createComment=async(req,res)=>{
    try{
        const response=await commentService.create(req.query.modelId,req.query.modelType,req.body.userId,req.body.content);
        return res.status(201).json({
            success:true,
            message:"successfully created a new comment",
            err:{},
            data:response
        })
    }catch(error){
        return res.status(500).json({
            success:false,
            message:"error in creating comment",
            err:error,
            data:{}
        })

    }
}
module.exports={
    createComment,
}