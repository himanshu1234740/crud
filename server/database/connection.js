const mongoose = require('mongoose')

const  connectDB =  mongoose.connect("mongodb://localhost:27017/crud").then(() => console.log("Connect succssfully"))
    .catch((err) => console.log(err))

module.exports = connectDB