const mongoose = require('mongoose')

const post = mongoose.Schema({
    desc: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true,
    },
    userimage:{
        type: String,
        required: true,
    },
    image:{
        type: String,
        required: true,
    }
})
module.exports = mongoose.model('Post', post)