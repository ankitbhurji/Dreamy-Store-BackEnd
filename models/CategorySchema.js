const mongoose = require('mongoose')

const categorySchema = {
    category:{type: String},
    createdAt:String,
    updatedAt:String,
}

const Category = mongoose.model("Category", categorySchema)

module.exports = Category;