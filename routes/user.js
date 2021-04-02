var express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');


router.get('/user/:id', userController.edit);
router.post('/user/:id', userController.update);
router.post('/user/:id/deleted', userController.deleted);
router.get('/', userController.show)
router.post('/add', userController.create);


module.exports = router;