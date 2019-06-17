const express = require("express");
const request = require("request");
const config = require("config");
const router = express.Router();
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator/check");

const Profile = require("../../models/Profile");
const User = require("../../models/User");
const Post = require("../../models/Post");

// @route GET api/search/test
// @desc Tests search route
// @access Public
router.get("/test", (req, res) => res.json({ meg: "Search work" }));

// @route   GET api/search/:searchString
// @desc    Search posts
// @access  Public
router.get("/posts/:searchString", async (req, res) => {
  try {
    const posts = await Post.find({
      $text: { $search: req.params.searchString }
    }).sort({ date: -1 });
    if (!posts) return res.status(400).json({ msg: "Post not found" });
    res.json(posts);
  } catch (err) {
    //console.error(err.message);
    if (err.kind == "ObjectId") {
      return res.status(400).json({ msg: "Post not found" });
    }

    res.status(500).send(`Server Error`);
  }
});

// @route   GET api/search/profiles/:searchString
// @desc    Search Profiles
// @access  Public
router.get("/profiles/:searchString", (req, res) => {
  const errors = {};

  Profile.find({ $text: { $search: req.params.searchString } })
    .populate("user", ["name", "avatar"])
    .then(profiles => {
      if (!profiles) {
        errors.noprofile = "There are no profiles";
        return res.status(404).json(errors);
      }

      res.json(profiles);
    })
    .catch(err => res.status(404).json({ profile: "There are no profiles" }));
});

module.exports = router;
