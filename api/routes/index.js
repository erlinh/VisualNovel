var express = require('express');
var router = express.Router();
const Products=require('../models/Products')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("ok");
});

//GET 
router.get('/stories',(req,res)=>{
  try {
  const products = Products.find({})
  res.send(products)
  } catch (error) {
    res.send('there is an error to get the data')
  }
 
})

//POST
router.post('/stories', async(req,res)=>{
  try {
  console.log(req.body)
  const product=new Products();
  product.title=req.body.title;
  product.rating=req.body.rating;
  //product.image=req.body.image;
  console.log(product)
  await product.save();
  res.send(product)
  } catch (error) {
    res.send('there is an error')
  } 
})
module.exports = router;
