const express = require('express')
const app  = express();

require('dotenv').config();

const cors = require('cors')

const bookRoutes = require('./route/route')
const notFound = require('./middleware/not-found')
const errorhandeller = require('./middleware/error-handeller') 
const connectDb = require('./db/db')

// middleware
app.use(cors())
app.use(express.json());

// routes

app.use('/api/books', bookRoutes)

app.use(notFound)
app.use(errorhandeller)



const start = async () =>{
    await connectDb(process.env.MONGO_URI)
    app.listen(3000, () =>{
        console.log("Server connected");
    })

}

start();