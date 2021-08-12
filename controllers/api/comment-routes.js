const router = require("express").Router();
const { User, Post, Comment } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/", (req, res) => {
  Comment.findAll({})
    .then((commentsData) => {
      res.json(commentsData);
    })
    .catch((err) => {
      res.status.json(err);
    });
});

router.post("/", withAuth, (req, res) => {
  if (req.session) {
    Comment.create({
      comment_text: req.body.comment_text,
      post_id: req.body.post_id,
      user_id: req.session.user_id,
    })
      .then((newComment) => {
        res.json(newComment);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  }
});

module.exports = router;
