const mongoose = require('mongoose')

const companySchema = {
    companyName: {type: String},
    createdAt:String, 
    updatedAt:String
}

const Company = mongoose.model("Company", companySchema)

module.exports = Company