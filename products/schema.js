const mongoose = require('mongoose');

let productSchema = new mongoose.Schema({
    _id: {
        type:Number,
        required:true,
      
    },
    nameOfProduct : {
        type:String,
        required:true,
        minLength:3,
        maxLength:100,
    },
    price:{
        type:Number,
        required:true,
        min:1
    },
    category:{
        type:String,
        lowercase:true,
        required:true,
        minLength:2,
    },
    power:{
        type:Number,
        required:true,
        minLength:2,
    },
    imageUrl:String
}, {_id:false});

let productModel = mongoose.model("Product",productSchema);

module.exports = productModel;