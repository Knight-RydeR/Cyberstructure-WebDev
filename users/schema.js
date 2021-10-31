var mongoose = require('mongoose');
const userSchema = new mongoose.Schema({

    username:{
        type : String,
        required:true,
        unique:true,
        maxLength: 15
    },
    password:{
        type:String,
        required:true,
        unique:true,
        maxLength : 100
    },
    nick:{
        type:String,
        required:true,
        maxLength:100,
        unique:true

    },
    isAdmin:{
    type : Boolean,
    default:false,
    required:true

    }
    
});

const model = mongoose.model('UserAccounts',userSchema);
module.exports = model;