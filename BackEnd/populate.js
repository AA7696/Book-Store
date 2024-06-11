
require('dotenv').config()

const data = require('./data.json')

const Book = require('./model/model')

const connectDb = require('./db/db')

const importData  = async () =>{
    try {
        await connectDb(process.env.MONGO_URI)
        await Book.create(data)
        console.log("Success");
        process.exit()
    } catch (error) {
        console.log(error);
    }
}

importData()