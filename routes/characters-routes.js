const { createCharacter } = require('../controllers/characters-controller');

const router = require('express').Router();

router.post('/character', createCharacter)



exports.router = router;