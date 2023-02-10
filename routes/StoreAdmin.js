const express = require("express");
const route = express.Router();

const Category = require('../models/CategorySchema')
const Color = require('../models/ColorSchema')
const Company = require('../models/CompanySchema')
const Product = require('../models/ProductSchema')



// route.post('/:category', (req, res)=>{

//     const category = new Category({
//         category: req.params.category,
//         createdAt: new Date(),
//         updatedAt: new Date()
//     })

//     category.save()
//     res.send("category has been saved.")
// })

// route.post('/:color', (req, res)=>{
    
//     const color = new Color({
//         color:req.params.color,
//         createdAt: new Date(),
//         updatedAt: new Date()
//     })
//     color.save()
//     res.send("color has been saved.")
// })

route.post('/:company', (req, res)=>{
    
    const company = new Company({
        companyName: req.params.company,
        createdAt: new Date(),
        updatedAt: new Date()
    })
    company.save()

    res.send("company has been saved.")
})





route.post('/product', (req, res)=>{
    const product = new Product({
        // name:req.body.Name,
        // price:req.body.Price,
        // discriptions:req.body.Discriptions,
        // images:[{image:req.body.Image}],

        // abailable:req.body.Abailable,
        // sku:req.body.Sku,
        // brand:req.body.Brand,

        // category:req.body.Category,
        // company:req.body.Company,
        // color:[{color:req.body.Color}],
        // freeShiping:req.body.FreeShiping,

        // ratings:[{tating:req.body.Rating}],
        // comments:[{comment:req.body.Comments}]
    });
    product.save()

    // console.log(req.body.Name)
    res.send('product data.')
})

module.exports = route