const mongoose = require("mongoose");

// const  url = "mongodb://0.0.0.0:27017/dsDB"
const  url = process.env.MONGODB_url

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