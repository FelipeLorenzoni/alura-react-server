const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const autor_controller = require('../controllers/autor.controller');

router.post('/create',autor_controller.autor_create);
router.get('/api/autors',autor_controller.autor_all);
// a simple test url to check that all of our files are communicating correctly.
router.get('/test', autor_controller.test);
module.exports = router;