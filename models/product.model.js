// const { mongo, default: mongoose } = require('mongoose');
const db = require('./db');
const productSchema = new db.mongoose.Schema({
    name: {type:String, require:true},
    price: {type:String, require:true},
    brand: {type:String, require:true}
},
{collection: "products"}
);
const productModel = db.model("productModel",productSchema);
module.exports = {productModel};