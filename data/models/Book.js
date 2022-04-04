const mongoose = require('mongoose')
const bookSchema = require('../schemas').schemas.bookSchema
const Book = mongoose.model('Book',bookSchema);
exports.Book = Book;