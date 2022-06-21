const router = require("express").Router();
const User= require("../models/User");
const bcrypt = require("bcrypt");


//code for registeration
router.post("/register",async (req,res)=>{

    try{
       const salt=await bcrypt.genSalt(10);
       const hashedPassworded = await bcrypt.hash(req.body.password, salt);
       const newUser=new User({
           username:req.body.username,
           email:req.body.email,
           password: hashedPassworded,
       });
       const user=await newUser.save();
       res.status(200).json(user);
    } catch(err){
        res.status(500).json(err);
    }
});
//code for login
router.post("/login",async (req,  res)=>{
    try{
        const user= await User.findOne({username: req.body.username});
        if(!user){
            res.status(400).json("Wrong credential!! please enter correctone")
        }
        const validate= await bcrypt.compare(req.body.password, user.password);
        if(!validate){
            res.status(400).json("Wrong credential!! please enter correctone")
        }
        res.status(200).json(user);
    } catch (err){
        res.status(500).json(err);
    }
});
module.exports=router
