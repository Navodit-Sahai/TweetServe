const CrudRepository = require('./crud-repository');
const Comment = require('../models/comment');

class CommentRepository extends CrudRepository {
    constructor() {
        super(Comment);
    }

    async find(id) {
        try {
            const comment = await Comment.findById(id).populate({ path: 'likes' });
            return comment;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports = CommentRepository;
