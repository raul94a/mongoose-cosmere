const router = require('express').Router();
const booksController = require('../controllers/books-controller')

router.get('/books', booksController.getBooks);
router.post('/book', booksController.createBook);

exports.router = router;
