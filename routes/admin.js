//18521531 - Vo Huu Tri

const express = require("express");
const jwt = require("jsonwebtoken");
const {auth} = require("../middleware/auth");

var router = express.Router();
var User = require("../model/user");
var Book = require("../model/book");

//admin get
router.get("/", auth, function (req, res) {
	Book.find({userId: req.body.userId}).then((books) => {
		res.json({message: "successfully", books: books});
	});
});

// admin/register post
router.post("/register", function (req, res, next) {
	User.findOne({username: req.body.username}).then((user) => {
		if (user) {
			res.status(500).json({error: "User already exists"});
		} else {
			new User({...req.body, isAdmin: true})
				.save()
				.then(() => res.json({message: "user created successfully"}))
				.catch((err) => res.status(500).json(err));
		}
	});
});

// admin/login post
router.post("/login", function (req, res, next) {
	User.findOne({username: req.body.username, password: req.body.password, isAdmin: true}).then((user) => {
		if (user) {
			var token = jwt.sign({userId: user._id, username: user.username}, process.env.SECRET_KEY);
			res.json({message: "login successful", token: token});
		} else {
			res.status(401).json({message: "login failed", user: user});
		}
	});
});

// admin/book post
router.post("/book", auth, function (req, res) {
	// console.log(req.body);
	new Book({
		title: req.body.title,
		summary: req.body.summary,
		imageUrl: req.body.imageUrl,
		price: req.body.price,
		number: req.body.number,
		userId: req.body.userId,
	})
		.save()
		.then(() => res.send({message: "book created successfully"}))
		.catch((err) => res.status(500).json(err));
});

module.exports = router;
