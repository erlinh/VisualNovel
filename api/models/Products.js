const mongoose = require("mongoose");
 

//Schema represent the database's structure and it's contents.
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  rating: {
    type: String,
    required: true,
  },
  image: String,

  createdAt: {
    type: Date,
    default: Date.now,
  }
}, {
  timestamps: true,
});

//inside mongoose.model('Product')=>'Product'represent the singular form of database.
//name(mongodb will search pular name of 'Product' in db)
//Afterward we can use variable name (Product) anytime when we put, create,delete,update our db.
const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;