const { response } = require('express');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.get('/', (req,res)=>{
    res.send('hello world from the auth.js file');
});

const User = require('../model/userSchema');

router.post('/register', async (req,res)=>{
    // console.log(req.body);
    // res.json({message:req.body});
    // res.send(req.body);

    const {name,email,phone,work,password,confirmpassword} = req.body;

    if(!name || !email || !phone || !work || !password || !confirmpassword){
        return res.status(422).json({error:"Please fill all the Fields Properly"});
    }

    // User.findOne({ email : email})
    // .then((userExist) =>{
    //     if(userExist) {
    //         return res.status(422).json({error:"User already Exists"});
    //     }
    //     const user = new User({name,email,phone,work,password,confirmpassword});
    //     user.save().then(()=>{
    //         res.status(201).json({ message : "User Registered Succesfully"});
    //     }).catch((err)=> res.status(500).json({ error: "Failed to Register"}));
    // }).catch(err => {console.log(err)});

    try {
        const userExist = await User.findOne({ email : email});
        if(userExist){
            return res.status(422).json({error:"User already Exists"});
        }else if(password != confirmpassword){
            return res.status(422).json({error:"Passwords dont match"});
        }else{
            // create a new user 
            const user = new User({name,email,phone,work,password,confirmpassword});
            // password hashing pre method being called here before the save func
            await user.save();
            res.status(201).json({ message :"User Registered Succesfully"});
        }
    } catch (error) {
        console.log(err);
    }
});

router.post('/signin', async (req,res) => {
    try {
        const { email, password } = req.body;
        if(!email || !password){
            return res.status(400).json({error:"Please fill all data"});
        }
        const userLogin = await User.findOne({ email: email });

        if(userLogin){
            const isMatch = await bcrypt.compare(password, userLogin.password);
            token = await userLogin.generateAuthToken();
            console.log(token);

            //storing cookie 
            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 2580000),
                httpOnly:true
            });

            if(!isMatch){ 
                res.json({ error :"Invalid Password"});
            } else{
                res.json({ message :"User Signin Succesfull"});
            }
        }else{
            res.json({ message :"User Signin error"});
        }
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;