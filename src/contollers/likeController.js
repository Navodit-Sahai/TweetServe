const LikeService=require('../services/like-service');

const likeService=new LikeService();

const toggleLike=async(req,res)=>{
    try{
        const response=await likeService.ToggleLike(req.query.modelId,req.query.modelType,req.body.userId);
        return res.status(200).json({
            success:true,
            data:response,
            message:'successfully toggled like',
            err:{}
        })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            success:false,
            data:{},
            message:'something went wrong',
            err:error
        })
    }
}
module.exports={toggleLike};