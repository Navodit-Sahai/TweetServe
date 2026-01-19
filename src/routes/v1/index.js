const express=require('express');
const router=express.Router();
const {authenticate}=require('../../middleware/authenticate');
const {createTweet}=require('../../contollers/tweetController');
const {toggleLike}=require('../../contollers/likeController');
const { createComment } = require('../../contollers/commentController');
const {getTweet}=require('../../contollers/tweetController')
const {signup,login}=require('../../contollers/userController');

router.post('/tweets',authenticate,createTweet);
router.get('/tweets/:id',getTweet);
router.post('/like/toggle',toggleLike);
router.post('/comments',createComment);
router.post('/signup',signup);
router.post('/login',login);

module.exports=router;