import {Router} from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import {check, validationResult} from "express-validator";

import {secretJwt, secretBcrypt} from "../config";
import User from "../models/User";

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

    const {email, password}=req.body; 
    const candidate = await User.findOne({email})     

    if(candidate){
      return res.status(400).json({message: "Email is used"})
    }

    const hashedPassword = await bcrypt.hash(password, 3475);
    const user = new User({email, password: hashedPassword});

    await user.save();
    res.status(201).json({message: "User was created"})

  }catch (err) {
    res.status(500).json({message:"Error 500"})
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
    res.status(500).json({message:"Error 500"})
  }
})

router.post('login', async (req,res)=>{})

export default router;