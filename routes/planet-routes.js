const express = require('express');
const router = express.Router();

const planetsController = require('../controllers/planets-controller')



router.get('/planets', planetsController.getPlanets);
router.get('/planet/:planet', planetsController.getPlanet);
router.post('/planets', planetsController.postPlanet);
router.put('/planet', planetsController.update);
// router.post('/planets/multiple', planetsController.postMultiplePlanets)



exports.router = router;