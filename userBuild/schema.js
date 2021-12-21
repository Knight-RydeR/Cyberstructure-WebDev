const mongoose = require('mongoose');

let userBuildSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:true,
        minLength:4
    },
    Processor : {
        type:String,
        required:true,
        minLength:6
    },
    Motherboard : {
        type:String,
        required:true,
        minLength:6
    },
    Ram : {
        type:String,
        required:true,
        minLength:6
    },
    PSU : {
        type:String,
        required:true,
        minLength:6
    },
    Storage : {
        type:String,
        required:true,
        minLength:6
    },
    GPU : {
        type:String,
        required:true,
        minLength:6
    },
    Cooler : {
        type:String,
        required:true,
        minLength:6
    },
    Fans : {
        type:String,
        
    },
    Case : {
        type:String,
        required:true,
        minLength:6
    },
    buildRating : {
        type :Number,
        required:true,
        default:0,
    },
    bestFor: {
        type:String,
    }
});

let userBuildModel = mongoose.model("User Builds",userBuildSchema);

module.exports = userBuildModel;