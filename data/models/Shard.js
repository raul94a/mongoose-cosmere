const mongoose = require('mongoose');
const shardSchema = require('../schemas').schemas.shardSchema;

const Shard = mongoose.model('Shard', shardSchema);
exports.Shard = Shard;


