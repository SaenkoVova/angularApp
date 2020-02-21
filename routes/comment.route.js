const { Router } = require('express');
const CommentsController = require('../controllers/comments.controller');
const router = Router();

router.post(
  '/comment',
  CommentsController.sendComment
);
router.post(
  '/respond',
    CommentsController.sendRespond
);
module.exports = router;
