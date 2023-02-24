const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const app = express();

dotenv.config({path:'./config.env'});
app.use(express.json());
app.use(require('./router/auth'));
require('./db/connection');

// const User = require('./model/userSchema');


app.get('/',(req,res)=>{
    res.send('HOME PAGE');
})

app.listen(3000,()=>{
    console.log(`Server running on port 3000`);
})