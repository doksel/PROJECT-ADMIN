import {Router} from "express";
import jwt from "jsonwebtoken";

import {getTokenFromHeader} from "../middlewares/helpers";
import {secretJwt} from "../config";

import User from "../models/User";

const router = Router();

router.get('/all',
async (req,res)=>{  
  try{
    const userId = jwt.verify(getTokenFromHeader(req), secretJwt).userId;
    const AllUsers = await User.find({});
    const users = AllUsers.filter(user=> user.id !== userId);

    res.json({users})
  }catch (err) {
    res.status(500).json({message:"Error 500", errors: err})
  }
})

router.get('/user/:id',
async (req,res)=>{  
  const id = req.params.id;
  try{
    const user = await User.findOne({id})

    res.json({user})
  }catch (err) {
    res.status(500).json({message:"Error 500", errors: err})
  }
})

router.get('/account',
async (req,res)=>{  
  try{
    const userId = jwt.verify(getTokenFromHeader(req), secretJwt).userId;
    const user = await User.findById(userId) 
        
    if(!user){
      return res.status(400).json({message: "User not found"})
    }
    
    res.json({user})

  }catch (err) {
    res.status(500).json({message:"Error 500", errors: err})
  }
})

export default router;
