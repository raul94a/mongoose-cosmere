const mongoose = require('mongoose');

const planetSchema = require('../schemas').schemas.planetSchema;

const Planet = mongoose.model('Planet', planetSchema);
exports.Planet = Planet;


