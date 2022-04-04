const { Book } = require("../data/models/Book")
const { Character } = require("../data/models/Character")

exports.getBooks = async (req, res, next) =>{
    res.json(Book.find().populate('characters', 'name faction deceased invested investitureName powers -_id'))
    
}
exports.createBook = async (req,res,next) => {
    const characters = (await Character.find()).map(e => e._id);
    await Book.create({...req.body, characters: characters})
}