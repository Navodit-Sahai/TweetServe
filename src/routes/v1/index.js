const express=require('express');
const router=express.Router();
const {createTweet}=require('../../contollers/tweetController');
const {toggleLike}=require('../../contollers/likeController');
router.post('/tweets',createTweet);
router.post('/like/toggle',toggleLike);
module.exports=router;