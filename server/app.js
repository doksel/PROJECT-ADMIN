import express from "express";
import path from "path";
import cors from 'cors';
import { ApolloServer, gql } from 'apollo-server-express';

import typeDefs from './modelsGraphql/schema.gql';
import resolvers from './resolvers';
import {endpoint} from './config'

const app = express();

const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app, path: endpoint });

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use(express.static(path.resolve(__dirname, "..", "build")));

app.get("*", (req, res) => {
    res.send('hello');
});

export default app;
