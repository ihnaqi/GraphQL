const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const typeDefs = require("./schemas/employee");
const resolvers = require("./resolvers");
const authMiddleware = require("./middlewares/auth");

const app = express();
app.use(authMiddleware);

const server = new ApolloServer({ typeDefs, resolvers });
server.start().then(() => {
  server.applyMiddleware({ app });
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Successfylly made connection with MongoDB");
  })
  .catch((err) => {
    console.log("Error while connecting to MongoDB", err);
  });

module.exports = app;
