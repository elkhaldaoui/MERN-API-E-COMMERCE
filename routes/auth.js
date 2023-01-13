const { Router } = require('express');
const authController = require('../controllers/authController');
const router = Router();

router.post('/register', authController.signup);
router.post('/login', authController.login);
router.get('/user', authController.get_user);

module.exports = router