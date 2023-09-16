const http = require("http");
const express = require('express');
const PORT = process.env.PORT || 6000;
let movies = [];
const app=express();
app.get("/",  (req, res) => {//list todo
  res.send( {movies});
});

app.post('/', (req, res) => {
  const body = req.body;
  if (Object.keys(body).length > 0) {
    movies.push(body);
    res.send(body);
  } else {
    res.status(400).send({ message: "empty body is not allowed" });
  }
});


app.listen(PORT, () => {
  console.log(` Server is is running on port ${PORT} `);
});