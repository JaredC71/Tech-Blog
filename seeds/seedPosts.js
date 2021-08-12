const { Post } = require('../models');

const postData = [
    {
        post_title: 'The Art of CSS',
        post_content: 'dshjfsdjkfsjkdfhkjsdhfkjsdfhdskjfdskf',
        user_id: 1
    },
    {
        post_title: 'HTML Debunked',
        post_content: 'cvvfdewroeiwrchddfhkjwefchjkdsfh',
        user_id: 2
    },
    {
        post_title: 'Javascript Is Not Java',
        post_content: 'dfssdfckjxhdskfhskjcdxcsdfhsdflkjewrcfjkhdskjhf',
        user_id: 3
    },
    {
        post_title: 'Whats the Point of CSS Frameworks?',
        post_content: 'dljksfsljkdfjkewchjkewhjk',
        user_id: 4
    },
    {
        post_title: 'Linear Regression',
        post_content: '(2 + 2) * 1 = 4 :)',
        user_id: 5
    },

];

const seedPost = () => Post.bulkCreate(postData);


module.exports = seedPost;