const { Router } = require('express');
const CommentsController = require('../controllers/comments.controller');
const router = Router();
const { check } = require('express-validator');

router.post(
  '/comment',
  CommentsController.sendComment
);
router.post(
  '/respond',
    [
      check('email', 'Некоректний email').isEmail()
    ],
    CommentsController.sendRespond
);
module.exports = router;
