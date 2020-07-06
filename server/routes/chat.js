import {Router} from "express";
import jwt from "jsonwebtoken";

import {getTokenFromHeader} from "../middlewares/helpers";
import {secretJwt} from "../config";
import Chat from "../models/Chat";

const router = Router();

const chat = [];

router.get('/',
async (req,res)=>{  
  try{
    const userId = jwt.verify(getTokenFromHeader(req), secretJwt).userId;

    res.json({chat})
  }catch (err) {
    res.status(500).json({message:"Error 500", errors: err})
  }
})

router.post('/',
async (req,res)=>{
  try{
    const userId = jwt.verify(getTokenFromHeader(req), secretJwt).userId;
    const {id, lastName} = req.body.id

    res.json({chat})
  }catch (err) {
    res.status(500).json({message:"Error 500", errors: err})
  }
})

export default router;
