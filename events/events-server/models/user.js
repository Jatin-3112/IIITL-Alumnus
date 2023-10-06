const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    fName: {
        type: String,
        required: true
    },
    lName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
    },
    imageUrl: {
        type: String,
    },
    bio: {
        type: String,
    },
    worked_history: {
        type: String,
    },
    currtly_working: {
        type: String,
    },
    github: {
        type: String,
    },
    linkedin: {
        type: String,
    },
    resume: {
        type: String,
    },
    googleId: {
        type: String,
    },
    messages: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Chat' }],
    friends: [{ type: String }],
    skills: [{
        type: String
    }],
    filledForm: {
        type: String,
        default: ''
    }
})

module.exports = mongoose.model('User', userSchema)