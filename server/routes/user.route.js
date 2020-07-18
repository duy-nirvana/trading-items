const express = require('express');
const router = express.Router();
const controller = require('../controllers/user.controller');

router.get('/', controller.index);
router.get('/get/:id', controller.getByID);
router.get('/search', controller.getListByName);
router.post('/create', controller.create);
router.put('/update/:id', controller.update);
router.delete('/delete/:id', controller.delete);

module.exports = router;