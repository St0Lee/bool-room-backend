const express = require("express");

const getAllBooks = require("../controllers/booksController/getAllBooksController");
const addBook = require("../controllers/booksController/addBookController");
const getBookById = require("../controllers/booksController/getBookByIdController");

const controlWrapper = require("../middlewares/ctrlWrapper");
const upload = require("../middlewares/upload")

const booksRouter = express.Router();

booksRouter.get("/", controlWrapper(getAllBooks));
booksRouter.post("/", upload.single("img"), controlWrapper(addBook));
booksRouter.get("/:id", controlWrapper(getBookById));

module.exports = booksRouter;