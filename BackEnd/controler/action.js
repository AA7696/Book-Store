
const Book = require('../model/model')

const getAllBooks = async (req,res) =>{
    try {
        const books = await Book.find({})
        res.status(200).json({books})
        
    } catch (error) {
        res.status(500).json({msg: error})

    }
}

const createBook = async (req,res) =>{
    try {
        const book = await Book.create(req.body)
        res.status(201).json({book});
    } catch (error) {
        res.status(500).json({msg: error})
    }
}

const deletebook = async (req,res) =>{
    try {
        const { id: bookId} = req.params
      const book = await Book.findByIdAndDelete({_id: bookId})
      if(!book){
        res.status(404).json({msg: "No Task with this id"})
      }else{
        res.status(201).json({book})
      }
    } catch (error) {
        res.status(500).json({msg: error})
    }
}

const updateBook = async (req,res) =>{
    try {
        const {id: bookId} = req.params
        const book = await Book.findOneAndUpdate({_id: bookId}, req.body,{new: true, runValidators: true})
        if(!book){
            res.status(404).json({msg: "No Update Available"})
        }else{
            res.status(201).json({book})
        }
        
    } catch (error) {
        res.status(500).json({msg: error})
    }
}

const getSingleBook = async (req,res)=>{
    try {
        const {id: bookId} = req.params
        const book = await Book.findById(bookId)
        if(!book){
            res.status(404).json({msg: "No book"})
        }else{
            res.status(201).json({book})
        }

    } catch (error) {
        res.status(500).json({msg: error})
    }
}

module.exports = {getAllBooks, createBook, deletebook, updateBook, getSingleBook}