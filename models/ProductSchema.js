const mongoose = require('mongoose')




const productSchema = {
    name: {type:String, required:true, unique:true},
    // price: {type:String, required:true, unique:true},
    price: {type:Number, required:true, unique:true},
    discriptions: {type:String, required:true, unique:true},
    // images: {type: String},
    // images:[{id:{type:Number}, image:{type:String}}],      



    abailable: {type:String, required:true, unique:true},
    sku: {type:String, required:true, unique:true},
    brand: {type:String, required:true, unique:true},

    category: {type:String},
    company: {type:String, required:true, unique:true},
    // colours: {type:String, required:true, unique:true},
    // colours: [{id:{type:Number}, colours:{type:String}}],
    // colours: [Array],
    colours:{type:String},
    freeShiping: {type:String, required:true, unique:true},

    // ratings:[{rating:String}],
    // comments: {type:String, required:true, unique:true}
    // comments: [{comment:{type:String}}]
}

const Product = mongoose.model("Product", productSchema)

module.exports = Product