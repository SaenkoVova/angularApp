const { Router } = require('express');
const AuthController = require('../controllers/auth.controller');
const router = Router();
const { check } = require('express-validator');

router.post(
    '/signIn',
    [
        check('email', 'Некоректний email').isEmail(),
        check('password', 'Мінімальна довжина пароля 8 символів')
            .isLength({ min: 6 })
    ],
    AuthController.signIn
);

router.post('/signUp', AuthController.signUp);

module.exports = router;
