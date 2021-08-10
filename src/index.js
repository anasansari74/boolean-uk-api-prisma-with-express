const express = require("express");
const morgan = require("morgan");

const app = express();

// Import Routers

const booksRouter = require("./resources/books/router");

// Middlewares

app.use(morgan("dev"));
app.use(express.json());

// Routes

app.use("/books", booksRouter);

// .catch Route

app.get("*", (req, res) => {
  res.json({ msg: "OK!" });
});

// Run server

const port = 3030;

app.listen(port, () => {
  console.log(`[SERVER] Running on http:localhost:${port}/`);
});
