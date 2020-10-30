var express = require('express');
var Productrouter = express.Router();
const Products=require('../models/Products')

/* GET home page. */
Productrouter.get('/', function(req, res, next) {
  res.redirect('/stories');
  res.send("ok");
});

//GET the data from database
Productrouter.get('/stories', async (req,res)=>{
  try {
  const products = await Products.find({}).sort({
    createdAt:'-1' 
  });
  //console.log(products)
  res.json(products)
  } catch (error) {
    res.send('there is an error to get the data'+error)
  }
 
})

//POST request to database
Productrouter.post('/stories', async(req,res)=>{
  try {
  const product=new Products();
  product.title=req.body.title;
  product.author=req.body.author;
  product.rating=req.body.rating;
  product.categories=req.body.categories;
  console.log(product) 
  await product.save();
  res.json(product)
  } catch (error) {
    res.send('there is an error' + error)
  } 
})

//GET route to specific ID, in this we use slug inplace of ID.
Productrouter.get('/stories/:slug', async (req,res)=>{
  const product = await Products.findOne({
    slug:req.params.slug
  })
  try {
    res.json(product)
  } catch (err) {
    console.log("there is an error to get data", err)
    //res.json({message:"There is no data with that ID"})
    res.json({message:"there is no data with that title"})
  }
})

module.exports = Productrouter;
