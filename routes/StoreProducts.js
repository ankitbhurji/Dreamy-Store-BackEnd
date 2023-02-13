const express = require("express");
const route = express.Router();

const Product = require('../models/ProductSchema')
const Category = require('../models/CategorySchema')
const Company = require('../models/CompanySchema')
const Color = require('../models/ColorSchema')



route.get('/categories', async (req, res)=>{
    const categories = await Category.find()
    res.send(categories)
})

route.get('/companies', async (req, res)=>{
    const company = await Company.find()
    res.send(company)
})

route.get('/colors', async (req, res)=>{
    const colors = await Color.find()
    res.send(colors)
})

route.get('/products', async (req, res)=>{
    const data = await Product.find()
    
    res.send(data)
})


route.get('/products/data', async (req, res)=>{
  
    var shortKey={price: 1}
    if(req.query.short=='Name(A-Z)'){
        shortKey = {name:1}
    }else if(req.query.short=='Name(Z-A)'){
        shortKey = {name:-1}
    }else if(req.query.short=='Price(Highest)'){
        shortKey = {price: -1}
    }else if(req.query.short=='Price(lowest)'){
        shortKey = {price: 1}
    }

    
    var ctg={}
    var cmp={}
    var rs={}
    var clr={}
    var shipping={}

    if(req.query.category){
         ctg = {category: req.query.category}
    }
    if(req.query.company){
         cmp = {company: req.query.company}
    }
    if(req.query.price){
         rs = {price:{$lt:req.query.price}}
    }
    if(req.query.color){
         clr = {colours:req.query.color}
    }
    if(req.query.shipping=='true'){
        shipping={freeShipping:req.query.shipping}
    }else{
        shipping={}
    }
   

    const mydata = await Product.find({
        '$and':[ {...ctg}, {...cmp}, {...clr}, {...rs}, {...shipping}]
    }).sort({...shortKey})    

    
    res.send(mydata)
})

route.get('/products/search/:searchKey', async (req, res)=>{
    var regex = new RegExp(req.params.searchKey, 'i')
    const searchProducts = await Product.find({name:regex})
    res.send(searchProducts)
    // const searchProducts = await Product.find()
    // res.send(searchProducts)
})

module.exports = route