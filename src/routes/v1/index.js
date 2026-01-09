const express=require('express');
const router=express.Router();
const {createTweet}=require('../../contollers/tweetController');
router.post('/tweets',createTweet);
module.exports=router;