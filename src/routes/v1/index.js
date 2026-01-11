const express=require('express');
const router=express.Router();
const {createTweet}=require('../../contollers/tweetController');
const {toggleLike}=require('../../contollers/likeController');
const { createComment } = require('../../contollers/commentController');
router.post('/tweets',createTweet);
router.post('/like/toggle',toggleLike);
router.post('/comments',createComment)
module.exports=router;