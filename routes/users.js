var express = require("express");
var jwt = require("jsonwebtoken");

var router = express.Router();
var User = require("../model/user");

// users/register post
router.post("/register", function (req, res, next) {
	User.findOne({username: req.body.username}).then((user) => {
		if (user) {
			res.status(500).json({error: "User already exists"});
		} else {
			new User({...req.body, isAdmin: false})
				.save()
				.then(() => res.json({message: "user created successfully"}))
				.catch((err) => res.status(500).json(err));
		}
	});
});

// users/login post
router.post("/login", function (req, res, next) {
	User.findOne({username: req.body.username, password: req.body.password, isAdmin: false}).then((user) => {
		if (user) {
			var token = jwt.sign({userId: user._id, username: user.username}, process.env.SECRET_KEY);
			res.json({message: "login successful", token: token});
		} else {
			res.status(401).json({message: "login failed", user: user});
		}
	});
});

module.exports = router;
