import {Router} from "express";
import Articles from "../models/Articles";

const router = Router();

router.get('/',
async (req,res)=>{  
  try{
    res.json({})
  }catch (err) {
    res.status(500).json({message:"Error 500", errors: err})
  }
})

router.get('/:id',
async (req,res)=>{  
  try{
    const category = await User.findById(userId) 
    res.json({})
  }catch (err) {
    res.status(500).json({message:"Error 500", errors: err})
  }
})

router.post('/',
async (req,res)=>{
  try{
    res.json({})
  }catch (err) {
    res.status(500).json({message:"Error 500", errors: err})
  }
})

router.patch('/',
async (req,res)=>{
  try{
    res.json({})
  }catch (err) {
    res.status(500).json({message:"Error 500", errors: err})
  }
})

router.delete('/:id',
async (req,res)=>{  
  try{
    res.json({})
  }catch (err) {
    res.status(500).json({message:"Error 500", errors: err})
  }
})

export default router;
