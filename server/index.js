import app, { server } from './app';
import { port } from './config';
import connectDB from './database/connectDB';

const PORT = port || 4000;

connectDB().then( info => {
    console.log(`Connected to ${info.host}:${info.port}/${info.name}`)
    // app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
    server.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
}).catch( err => {
    console.log(err);
    console.error('Unable to connect to database');
    process.exit(1);
});