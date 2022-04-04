const mongoose = require('mongoose');
const { Schema } = mongoose;

//shard schema
const shardSchema = new Schema({
    name: String,
    vessel: String,
    status: String
})

//character schema
const characterSchema = new Schema({
    name: String,
    invested: Boolean,
    investitureName: String,
    powers: [String],
    faction: String,
    deceased: Boolean,
});

//planet schema
const planetSchema = new Schema({
    name: String,
    shards: {
        type: [Schema.Types.ObjectId],
        ref:'Shard'
    },
    books: {
        type: [Schema.Types.ObjectId],
        ref: 'Book'
    }
});
const bookSchema = new Schema({
    name: String,
    saga: String,
    characters: [Schema.Types.ObjectId]
})

exports.schemas ={
    shardSchema: shardSchema,
    planetSchema: planetSchema,
    characterSchema: characterSchema,
    bookSchema: bookSchema
}