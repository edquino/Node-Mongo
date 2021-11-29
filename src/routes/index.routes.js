const { Router} = require('express');
const router = Router();

const { renderIndex, renderAbout } = require('../controllers/index.controllers');

//render index
router.get('/', renderIndex);

//render about
router.get('/about', renderAbout);

module.exports = router;