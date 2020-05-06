import {Router} from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import {check, validationResult} from "express-validator";

import {secretJwt} from "../config";
import User from "../models/User";
import {sendMail} from "../common/mailer"

const router = Router();

router.post('/register',
[
  check("email", "Email isn't correct").isEmail(),
  check("password", "Min length of password is 6").isLength({min:6})
],
async (req,res)=>{
  try{
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        message: "Data isn't correct by register"
      })
    }

    const {email, password, firstName, lastName}=req.body; 
    const candidate = await User.findOne({email})     
        
    if(candidate){
      return res.status(400).json({message: "Email is used"})
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = new User({firstName, lastName, email, password: hashedPassword});

    await user.save();

    const dataEmail = {
      email,
      subject: 'Congratulations! You have registered on our "Site"!', 
      template: `Your email: ${user.email}
      Your password: ${password}`
    }

    sendMail(dataEmail);
    
    res.status(201).json({message: "User was created"})

  }catch (err) {
    res.status(500).json({message:"Error 500", errors: err})
  }
})

router.post('/login',
[
  check("email", "Enter correct email").normalizeEmail().isEmail(),
  check("password", "Enter password").exists()
], 
async (req,res)=>{
  try{
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        message: "Enter into system isn't correct"
      })
    }

    const {email, password}=req.body;
    const user = await User.findOne({email});
    
    if(!user){
      return res.status(400).json({message: "User not found"})
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if(!isMatch){
      return res.status(400).json({message: "Enter correct password"})
    }

    const token = jwt.sign(
      {userId: user.id},
      secretJwt,
      {expiresIn:"1h"}
    )

    res.json({token, userId: user.id})
  }catch (err) {
    res.status(500).json({message:"Error 500", errors: err})
  }
})

router.post('/reset-password', async (req,res)=>{
  try{
    if(!req.body.email){
      return res.status(400).json({message: "User not found"})
    }
    const {email}=req.body; 
    const user = await User.findOne({email});

    if(!user){
      return res.status(400).json({message: "Email is not found"})
    }

    const dataEmail = {
      email,
      subject: "Reset Password!", 
      template: `Your password: ${user.password}`
    }

    sendMail(dataEmail);

    res.json({reseted: true});
  }catch(err){
    res.status(500).json({message:"Error 500", errors: err})
  }
  
})

router.post('login', async (req,res)=>{})

export default router;