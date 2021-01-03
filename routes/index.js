var express = require("express");
var router = express.Router();

var Book = require("../model/book");

// / get
router.get("/", function (req, res, next) {
	Book.find({}).then((books) => {
		var book = books.map((b) => {
			return {
				title: b.title,
				id: b._id,
			};
		});

		res.json(book);
	});
});

// book/:id get
router.get("/book/:id", function (req, res, next) {
	Book.findById(req.params.id).then((book) => {
		if (book) {
			res.json(book);
		} else {
			res.json({message: "Book not found"});
		}
	});
});

module.exports = router;
