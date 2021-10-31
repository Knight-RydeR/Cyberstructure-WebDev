const mongoose = require('mongoose');

let categorySchema = new mongoose.Schema({
    categoryId:{
        type:Number,
        required:true,
        unique:true
    },
    nameOfCategory:{
        type:String,
        required:true,
        unique:true,
        minLength:4
    }
});

let categoryModel = mongoose.model("categoryModel",categorySchema);

module.exports = categoryModel;