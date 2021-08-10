// const express=require("express")
// const booksRouter = express.Router()

const booksRouter = require("express").Router();

const { getAllBooks, getAllFiction } = require("./controller");

booksRouter.get("/", getAllBooks);

booksRouter.get("/fiction", getAllFiction);

module.exports = booksRouter;
