import dotenv from 'dotenv';
import path from 'path';

const root = path.join.bind(this, __dirname);
dotenv.config({ path: root('.env') });

export const isProduction = process.env.NODE_ENV === 'production';
export const isDevelopment = !isProduction;

export const secretBcrypt = process.env.SECRET_BCRYPT || "doksel";
export const secretJwt = process.env.SECRET_JWT || "doksel secret";

export const url = process.env.URL;
export const port = process.env.PORT || 4000;
export const mongo_url = process.env.MONGO_URL;
