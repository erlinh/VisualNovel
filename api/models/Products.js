const mongoose = require("mongoose");
const slugify= require('slugify')
 

//Schema represent the database's structure and it's contents.
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  author:{
    type:String,
    required:true,
  },
  imgUrl:{
    type:String,
    required:true,
  },
  rating: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
    unique:true,

  },
  categories: [{
    type:String
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  }
}, {
  timestamps: true,
});

//this will validate ProductSchema before store its data to database.
ProductSchema.pre('validate', function (next) {
  if (this.title) {
    this.slug = slugify(this.title, {
      lower: true,
      strict: true
    })
    next()
  }
})


//inside mongoose.model('product')=>'product'represent the singular form of database.
//name(mongodb will search pular name of 'product' in db)
//Afterward we can use variable name (Product) anytime when we put, create,delete,update our db.
const Product = mongoose.model("product", ProductSchema);

module.exports = Product;