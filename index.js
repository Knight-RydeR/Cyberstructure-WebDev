const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const db = require('./config/config')
const user = require('./users/schema');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors =require('cors');
let rT = require('./routes/defaultRoutes.js');
let auth = require('./routes/authRoutes');
let admin = require('./routes/adminRoutes')
var pathfinderUI = require('pathfinder-ui')

console.log(db);

 const app = express();
 app.use(express.json({limit: '50mb'}));
 app.use(express.urlencoded({limit: '50mb'}));
app.use(cors());
app.use('/api',rT);
app.use('/api/auth',auth);
app.use('/api/auth/admin',admin);



//routes



//database connection

mongoose.Promise = global.Promise;
const e = mongoose.connect(
    db.config.DATABASE,
    {
        useNewUrlParser: true,
        useUnifiedTopology:true,useCreateIndex : true ,
        useFindAndModify:false
    },
        (err)=> {
            if(err)
            console.log(`got error ${err}`);
            console.log('database is connected');
        })
const PORT = 1639;
app.listen(PORT,()=>{
    console.log(`App is live at port ${PORT}`);
})

app.use('/pathfinder', function(req, res, next){
    pathfinderUI(app)
    next()
}, pathfinderUI.router)