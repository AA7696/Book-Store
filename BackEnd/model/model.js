const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, "please provide name"]
    },
    price: {
        type: Number,
        require: [true, "please provide price"]
    },
    availability: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    author: {
        type: String,
        require: [true, "Please provide author"]
    },
    imgUrl: {
        type: String,
        require: true
    },
    description: {
        type: String,
    }

})

module.exports = mongoose.model('Book', bookSchema)