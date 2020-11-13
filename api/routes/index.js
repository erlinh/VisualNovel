var express = require('express');
var Productrouter = express.Router();
const Products=require('../models/Products');

//var _ = require('lodash');

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

  // get the list of categories available in the whole DB
  const categories = [];
  products.forEach(product => {
    product.categories.forEach(category => {
      if (!categories.includes(category)) {
        categories.push(category);
      }
    })
  })

  // the "new" object of all entries, sorted into categories
  const productsInCategories = {
    "all": products
  };

  // populate categories
  categories.forEach(category => {
    let productsOfCategory = [];
    // fish out the entries with certain category
    products.forEach(product => {
      if (product.categories.includes(category)) {
        productsOfCategory.push(product)
      }
    });

    // add to the "new" end object the key-value pair of category and array of all fitting entries
    productsInCategories[category] = productsOfCategory;
  })

  console.log(productsInCategories);
  res.json(productsInCategories);


  // LODASH TRY
  /* const categoriesAvailable = ["cartoon", "animation", "kids", "fantasy", "action"];
  
    const groupedProducts = _.groupBy(products, product => {
      console.log(product.categories);
      return product.categories;
    })
    console.log(groupedProducts) */

  } catch (error) {
    res.send('there is an error to get the data'+error);
  }
 
})

//POST request to database - save new product
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

// POST - search for entries that include the searchphrase in any field
Productrouter.post('/search/:searchTerm', async (req, res) => {
  try {
    const searchQuery = req.params.searchTerm;
    
    const foundProducts = await Products.find({
      // find products which author or title field includes the search term, case insensitive
      // if nothing found, returns empty array
      $or: [
        {author: { "$regex": searchQuery, "$options": "i"}},
        {title: { "$regex": searchQuery, "$options": "i"}}
      ]
    })
    console.log('foundProducts: ', foundProducts);
    res.send(`Search results for "${searchQuery}": found ${foundProducts.length} items`);

  } catch (err) {
    console.log('error when searching: ', err);
    res.json({message: 'error when searching'});
  }
});

//GET route to specific ID, in this we use slug inplace of ID - find product by slug
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
