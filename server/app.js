import express from "express";
import path from "path";
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use(express.static(path.resolve(__dirname, "..", "build")));

app.get("*", (req, res) => {
    res.send('hello');
});

export default app;
