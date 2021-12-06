const mongoose = require('mongoose');

let categorySchema = new mongoose.Schema({
    _id: {
        type:Number,
        required:true,
      
    },
    nameOfCategory:{
        type:String,
        required:true,
        unique:true,
        minLength:3
    }
}, {_id:false});

let categoryModel = mongoose.model("categoryModel",categorySchema);

module.exports = categoryModel;