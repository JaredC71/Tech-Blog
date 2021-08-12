const { Comment } = require('../models');

const commentData = [
    {
        comment_text: 'I dont understand your points',
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: 'Disgracful.',
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: 'The revolution has begun!',
        user_id: 3,
        post_id: 3
    },
    {
        comment_text: 'I think I ate to much cheese this morning',
        user_id: 4,
        post_id: 4
    },
    {
        comment_text: 'Pizza Rolls at 3am with Diplo playing in the background, straight vibes.',
        user_id: 5,
        post_id: 5
    }
  

];

const seedComments = () => Comment.bulkCreate(commentData);


module.exports = seedComments;