const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const autor_controller = require('../controllers/autor.controller');

router.post('/autor',
autor_controller.validate('autor_create')
,autor_controller.autor_create);


router.get('/autor',autor_controller.autor_all);
router.get('/autor/delete',autor_controller.autor_delete);
// a simple test url to check that all of our files are communicating correctly.
router.get('/test', autor_controller.test);
module.exports = router;