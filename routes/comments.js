const express = require("express");
const router = express.Router();
const commentsController = require("../controllers/comments");

//Post Routes - simplified for now
router.post("/createComment", commentsController.createComment);

router.put("/likeComment/:id", commentsController.likeComment);

router.delete("/deleteComment/:id", commentsController.deleteComment);

module.exports = router;
