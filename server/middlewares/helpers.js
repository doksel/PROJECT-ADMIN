import { HttpStatusCode } from "./constants";
import jwt from "jsonwebtoken";
import { secretJwt } from "../config";

export const getTokenFromHeader = (req, res, next) => {
  if(req.method === "OPTIONS"){
    return next()
  }

  try {
    const token = req.headers.authorization.split(" ")[1]

    if(!token){
      res.status(401).json({message: "Not authorization"})
    }

    const decoded = jwt.verify(token, secretJwt)
    req.user = decoded;
    next();
  } catch(err) {
    res.status(401).json({message: "Not authorization"})
  }
};

export const ErrorHandler = (errors) => {
  const { response } = errors;
  let data = {
    status: response.status,
    error: response.errors,
  };

  if (response.status === HttpStatusCode.BAD_REQUEST) {
    data.error = "Bad request";
  } else if (response.status === HttpStatusCode.NOT_FOUND) {
    data.error = "Not found";
  } else if (response.status === HttpStatusCode.FORBBIDEN) {
    data.error = "Not forbiden";
  } else if (response.status === HttpStatusCode.UNAUTHERIZED) {
    data.error = "Unaythorized";
  } else {
    data.status = 500;
    data.error = "Server error";
  }

  return data;
};
