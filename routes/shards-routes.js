const express = require('express');
const router = express.Router();

const shardsController = require('../controllers/shards-controller')



router.get('/shards', shardsController.getShards);
router.post('/shards', shardsController.postShard);
router.post('/shards/multiple', shardsController.postMultipleShards)



exports.router = router;