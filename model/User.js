const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    id: String,
    username: String,
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    phone: String,
    userStatus: Number,
})

module.exports = mongoose.model('User', userSchema)
