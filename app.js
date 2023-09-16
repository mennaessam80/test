
require("dotenv").config();
const express = require('express');
// const logg = require("./midlewere/log");
const mongoose = require('mongoose');
const movierouter =require('./routes/movie');
const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/movies",movierouter)
mongoose
  .connect(process.env.CONNECTION_STRING, {})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.log(err);
  });
app.listen(PORT, () => {
  console.log(` Server is is running on port ${PORT} `);
});
