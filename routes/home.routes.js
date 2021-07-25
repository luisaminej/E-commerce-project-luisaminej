const express = require('express');
const router = express.Router();

/* GET home page */
router.get('/', (req, res) => res.render('index', { title: 'FREEBUY.COM.MX' }));

module.exports = router;
