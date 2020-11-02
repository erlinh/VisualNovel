var express = require('express');
var Productrouter = express.Router();
const Products=require('../models/Products');

var _ = require('lodash');

/* GET home page. */
Productrouter.get('/', function(req, res, next) {
  res.send("ok");
});

//GET the data from database
Productrouter.get('/stories', async (req,res)=>{
  try {
  const products = await Products.find({}).sort({
    createdAt:'-1' 
  });
  //console.log(products)

  const categories = ["cartoon", "animation", "kids", "fantasy", "action"];

  const productsInCategories = {};

  categories.forEach(category => {
    let productsOfCategory = [];
    products.forEach(product => {
      if (product.categories.includes(category)) {
        productsOfCategory.push(product)
      }
    });

    productsInCategories[category] = productsOfCategory;
  })

  console.log(productsInCategories);

  // LODASH TRY
  /* const categoriesAvailable = ["cartoon", "animation", "kids", "fantasy", "action"];
  
    const groupedProducts = _.groupBy(products, product => {
      console.log(product.categories);
      return product.categories;
    })
    console.log(groupedProducts) */
  

  res.json(products);
  } catch (error) {
    res.send('there is an error to get the data'+error);
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
  console.log(product);

  await product.save();

  res.json(product)
  } catch (error) {
    res.send('there is an error' + error);
  } 
});

module.exports = Productrouter;
