const express = require("express");
const router = express.Router();
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
<<<<<<< HEAD
const jwt = require("jsonwebtoken");
const User = require("../../models/Users");
const keys = require("../../config/keys").secret;
const passport = require("passport");
=======
const User = require("../../models/Users");
>>>>>>> f761cc920da1d16e7c6ca15b17f63ca44b958c33

// @route   GET api/users/test
// @desc    Tests users route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Users Works" }));

router.post("/register", (req, res) => {
  console.log(req.body);
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      console.log(user);
      return res.status(400).json({ email: "Email already exists" });
    } else {
      const avatar = gravatar.url(req.body.email, {
        s: "200", // size
        r: "pg", // Rating
        d: "mm" // Default
      });
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        avatar,
        password: req.body.password
      });
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
<<<<<<< HEAD
          newUser.password = hash;
=======
>>>>>>> f761cc920da1d16e7c6ca15b17f63ca44b958c33
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => res.send(err));
        });
      });
    }
  });
});
<<<<<<< HEAD

router.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email }).then(user => {
    if (!user) {
      return res.status(404).json({ email: "User not found" });
    }

    console.log(user);
    //check password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User Matched
        const payload = { id: user.id, name: user.name, avatar: user.avatar }; // JWT payload
        // Sign Token
        jwt.sign(payload, keys, { expiresIn: 3600 }, (err, token) => {
          res.json({
            success: true,
            token: "Bearer " + token
          });
        });
      } else {
        return res.status(400).json({ password: "Password incorrect" });
      }
    });
  });
});

router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({ msg: "Success", user: req.user });
  }
);
=======
>>>>>>> f761cc920da1d16e7c6ca15b17f63ca44b958c33

module.exports = router;
