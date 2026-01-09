const TweetService=require('../services/tweet-sevice');
const tweetService=new TweetService();
const createTweet=async(req,res)=>{
    try{
        const response=await tweetService.create(req.body);
        return res.status(201).json({
            success:true,
            message:"successfully created a new tweet",
            err:{},
            data:response
        })
    }catch(error){
        return res.status(500).json({
            success:false,
            message:"error in creating tweet",
            err:error,
            data:{}
        })

    }
}
module.exports={
    createTweet
}