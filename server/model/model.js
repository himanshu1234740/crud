const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    
    name: String,
    email: String,
    password: String,


})

const Blog = mongoose.model('Blog', schema);

module.exports = Blog;