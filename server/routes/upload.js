import {Router, json} from "express";
import path from "path";
import fs from "fs";
import multer from "multer";
import Sharp from "sharp";
import mkdirp from "mkdirp";
import jwt from "jsonwebtoken";

import {getTokenFromHeader} from "../middlewares/helpers";
import {secretJwt} from "../config";

const router = Router();
const rs = Math.random().toString(36).slice(-3);

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    const dir = "/" + rs() + "/" + rs();

    fs.mkdir("../uploads", err => {
      if (err) {
        console.log(err.stack)
      } else {
        mkdirp("../uploads" + dir, err => {
          callback(err, "../uploads" + dir)
        })
      }
    })
  },
  filename: (req, file, callback) => {
    callback(null, Date.now() + path.extname(file.originalname))
  }
});

const upload = multer({
  storage,
  limits: { fileSize: 2*1024*1024},
  fileFilter: (req, file, callback) => {
    const extname = path.extname(file.originalname);
    if(extname !== ".jpg" && extname !== ".jpeg" && extname !== ".png"){
      const error = new Error("Extention");
      error.code = "EXTENTION";
      return callback(error);
    }
    callback(null, true)
  }
}).single("avatar")

router.get('/',
getTokenFromHeader,
async (req,res) => {  
  upload(req, res, err => {
    let error = "";

    if(err.code === "LIMIT_FILE_SIZE"){
      error = "No more 2mg!"
    }else if(err.code === "EXTENTION"){
      error = "Only jpeg and png format!"
    }

    res,json({ ok: !error, error})
  })
})

router.post('/',
getTokenFromHeader,
async (req,res) => {
  try{
    const userId = req.user.userId;
    const {id, lastName} = req.body.id

    res.json({chat})
  }catch (err) {
    res.status(500).json({message:"Error 500", errors: err})
  }
})

export default router;
