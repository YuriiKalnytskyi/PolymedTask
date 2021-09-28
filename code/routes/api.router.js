const router = require('express').Router();

const { contactController: { contact } } = require('../controllers');

router.post('/contact', contact);

// router.get('/', (req, res) => res.json('ok'));
module.exports = router;
