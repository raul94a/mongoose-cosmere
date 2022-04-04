const mongoose = require('mongoose');
const characterSchema = require('../schemas').schemas.characterSchema;
const Character = mongoose.model('Character',characterSchema);
exports.Character = Character;





