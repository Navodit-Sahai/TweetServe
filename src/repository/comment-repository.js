const CrudRepository=require('./crud-repository');
const Comment=require('../models/comment');

class CommentRepository extends CrudRepository{
    constructor(){
        super(Comment)
    }
    async find(id){
            try{
                const tweet =await Tweet.findById(id).populate({path:'likes'});
                return tweet;
            }catch(error){
                console.log(error);
            }
        }
}
module.exports=CommentRepository;