const express = require('express')
const router = express.Router();
const User = require('../model/Users')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
require('dotenv').config();


const secreteKey = process.env.SECRET_KEY



//Register

router.post('/register', async (req,res)=>{
    try {

        const {name, email,password }= req.body;
        if(!name || !email || !password) return res.status(400).json({status:false, message:"All fields are required !"})

        const existingUser = await User.findOne({email})
        if(existingUser) return res.status(400).json({status:false, message:"Email already registered!"});

        const hashPassword = await bcrypt.hash(password, 10)


        const newUser = new User({name,email,password:hashPassword});
        await newUser.save();

        return  res.status(201).json({status:true, message:" Register successfull."})

        
        
    } catch (error) {
        return res.status(400).json({status:false, message:"Something went wrong ..!", error:error.message})

        
    }
})

//login

router.post('/login', async (req,res)=>{
    try {

        const {email,password }= req.body;
        if(!email || !password) return res.status(400).json({status:false, message:"All fields are required !"})

       const user = await User.findOne({email})

       if(!user || !(await bcrypt.compare(password,user.password))){
        return res.status(400).json({status:true,message:"Inavid Credential"})

       }

       const token = jwt.sign({id:user._id, email:user.email},secreteKey,{expiresIn:'1hr'} )


        return  res.status(201).json({status:true, message:" Register successfull.", token:token})

        
        
    } catch (error) {
        return res.status(400).json({status:false, message:"Something went wrong ..!", error:error.message})
        
    }
})

//profile


router.post('/profile', async (req,res)=>{
    try {
        const token = req.headers.authorization?.split(' ')[1];
        if(!token) return res.status(400).json({status:false, message:"Access Denied"})

        jwt.verify(token,secreteKey, async(err, decode)=>{
            const user = await User.findById(decode?.id)

            if(!user) return res.status(400).json({status:false, message:"Invalid Token!"})
            const userData ={
                id:user.id,
                name:user.name,
                email:user.email
            }
       
            return  res.status(201).json({status:true, message:" profile Data.", data:userData})
        })
        

       }
   
     catch (error) {
        return res.status(400).json({status:false, message:"Something went wrong ..!", error:error.message})
        
    }
})



module.exports = router;