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
  createdAt: {
    type: Date,
    default: Date.now,
  }
}, {
  timestamps: true,
});

//inside mongoose.model('product')=>'product'represent the singular form of database.
//name(mongodb will search pular name of 'product' in db)
//Afterward we can use variable name (Product) anytime when we put, create,delete,update our db.
const Product = mongoose.model("product", ProductSchema);

module.exports = Product;