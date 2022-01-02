const express = require("express");
const User = require("../models/Users");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();

router.get("/", (req, res) => {
  res.send("User page");
});

router.post("/login", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  if (user == null) {
    return res.status(401).json({
      message: "Auth Failed1",
    });
  } else {
    bcrypt.compare(req.body.password, user.password, (e, result) => {
      if (e) {
        return res.status(401).json({
          message: "Auth Failed",
        });
      }
      if (result) {
        const token = jwt.sign(
          {
            email: user.email,
            userId: user._id,
            username: user.username,
          },
          process.env.JWT_KEY
        );

        res.status(200).json({
          token: token,
        });
      } else {
        return res.status(401).json({ message: "Auth Failed" });
      }
    });
  }
});

router.post("/signup", async (req, res) => {
  console.log("signip here");

  const user = await User.findOne({ email: req.body.email });
  if (user != null) {
    res.status(409).json({
      message: "User already exists",
    });
  } else {
    bcrypt.hash(req.body.password, 10, async (err, hash) => {
      if (err) {
        return res.status(500).json(err);
      } else {
        const user = await new User({
          username: req.body.username,
          email: req.body.email,
          password: hash,
        });

        try {
          await user.save();
          const token = jwt.sign(
            {
              email: user.email,
              userId: user._id,
              username: user.username,
            },
            process.env.JWT_KEY
          );
          res.status(201).json({
            token: token,
            message: "User Created",
          });
        } catch (error) {
          res.status(500).json({ error: error });
        }
      }
    });
  }
});

module.exports = router;
