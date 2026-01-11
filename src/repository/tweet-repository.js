const  CrudRepository  = require('./crud-repository');
const Tweet=require('../models/tweet');

class TweetRepository extends CrudRepository{
    constructor(){
        super(Tweet);
    }
    async create(data){
        try{
            const tweet=await Tweet.create(data);
            return tweet
        }catch(error){
            console.log(error);
        }
    }
    async find(id){
        try{
            const tweet =await Tweet.findById(id).populate({path:'likes'});
            return tweet;
        }catch(error){
            console.log(error);
        }
    }

    async destroy(id){
        try{
            await Tweet.findByIdAndRemove(id);
            return true;
        }catch(error){
            console.log(error);
        }
    }
    async getAll(offset,limit){
        try{
            const tweet=await Tweet.find().skip(offset).limit(limit);
            return tweet;

        }catch(error){
            console.log(error);
        }
    }
    async getWithComment(){

    }
}
module.exports=TweetRepository;