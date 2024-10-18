const express = require('express');
const router = express.Router();
const { getMenuItems } = require('../controllers/menuController');

router.get('/');
router.get('/', getMenuItems);

module.exports = router;
