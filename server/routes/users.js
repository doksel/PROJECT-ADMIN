import {Router} from "express";
import jwt from "jsonwebtoken";
import {secretJwt} from "../config";

import User from "../models/User";

const router = Router();

router.get('/all',
async (req,res)=>{  
  try{
    const users = await User.find({})
    res.json({users})
  }catch (err) {
    res.status(500).json({message:"Error 500", errors: err})
  }
})

router.get('/account',
async (req,res)=>{  
  try{
    const getTokenFromHeader = (req) => {
      if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        return req.headers.authorization.split(' ')[1];
      }
    }

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
