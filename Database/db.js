const mongoose = require("mongoose");

const url = 'mongodb+srv://admin-ankit:Test123@cluster0.0takyqv.mongodb.net/dsDB'
// const  url = "mongodb://0.0.0.0:27017/dsDB"

function Connetion(){
    mongoose.connect(url, (err)=>{
        if(!err){
            console.log("DATABASE IS CONNECTED.")
        }else{
            console.log(err, 'DATA BASE IS NOT CONNECTED.')
        }
    })
}

module.exports = Connetion