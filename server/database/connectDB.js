import {isProduction, mongo_url} from '../config';
import mongoose from 'mongoose';

const connectDB = () => {
    return new Promise((resolve, reject) => {
        mongoose.Promise = global.Promise;
        mongoose.set('debug', isProduction);

        mongoose.connection
            .on('error', error => reject(error))
            .on('close', () => console.log('Database connection closed.'))
            .once('open', () => resolve(mongoose.connection));
    
        mongoose.connect(mongo_url, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
    });
}

export default connectDB;