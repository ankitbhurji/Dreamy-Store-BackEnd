const mongoose = require('mongoose')

const colorSchema = {
    color:{type:String},
    createdAt:String, 
    updatedAt:String
}

const Color = mongoose.model("Color", colorSchema)

module.exports = Color;