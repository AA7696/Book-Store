const express = require('express')

const {getAllBooks, createBook, deletebook, updateBook, getSingleBook} = require('../controler/action')

const route = express.Router();

route.get('/', getAllBooks)

route.post('/', createBook)

route.delete('/:id', deletebook)

route.patch('/:id', updateBook)

route.get('/:id', getSingleBook)


module.exports =  route;