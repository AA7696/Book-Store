
const errorHandelller = (err,req,res,next) =>{
    res.status(500).json({msg: "Something went wrong please try again"})
}

module.exports = errorHandelller;