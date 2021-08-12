const router = require("express").Router();
const { User, Post, Comment } = require("../../models");

router.get("/", (req, res) => {
  User.findAll({
    attributes: { exclude: ["password"] },
  })
    .then((userData) => res.json(userData))
    .catch((err) => res.status(500).json(err));
});

router.get("/:id", (req, res) => {
  User.findOne({
    attributes: { exclude: ["password"] },
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: Post,
        attributes: ["id", "post_title", "post_content", "created_at"],
      },
      {
        model: Comment,
        attributes: ["id", "comment_text", "created_at"],
        include: {
          model: Post,
          attributes: ["post_title"],
        },
      },
      {
        model: Post,
        attributes: ["post_title"],
      },
    ],
  })
    .then((userData) => {
      res.json(userData);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.put("/:id", (req, res) => {
  User.update(req.body, {
    individualHooks: true,
    where: {
      id: req.params.id,
    },
  })
    .then((updatedUser) => {
      res.json(updatedUser);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
  User.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deletedUser) => {
      res.json(deletedUser);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.post("/login", (req, res) => {
  User.findOne({
    where: {
      username: req.body.username,
    },
  })
    .then((foundUser) => {
      if (!foundUser) {
        res.status(400).json({ message: "No user found" });
        return;
      }
      const validPassword = foundUser.checkPassword(req.body.password);

      if (!validPassword) {
        res.status(400).json({ message: "wrong username or password" });
        return;
      }
      req.session.save(() => {
        (req.session.user_id = foundUser.id),
          (req.session.username = foundUser.username),
          (req.session.loggedIn = true);
        res.json({ user: foundUser, message: "Welcome :)" });
      });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(404).end();
    });
  } else {
    res.status(404).end();
  }
});
router.post("/", (req, res) => {
  User.create({
    username: req.body.username,
    password: req.body.password,
  })
    .then((newUser) => {
      req.session.save(() => {
        (req.session.user_id = newUser.id),
          (req.session.username = newUser.username),
          (req.session.loggedIn = true);
        res.json(newUser);
      });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;