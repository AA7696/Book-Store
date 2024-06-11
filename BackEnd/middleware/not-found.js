
const notFound = (req,res) =>{
    res.status(404).send("Route Does Not Exsist")
}

module.exports = notFound;