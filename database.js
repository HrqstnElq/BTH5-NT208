const mongoose = require("mongoose");

class Database {
	constructor() {
		this._connect();
	}
	_connect() {
		mongoose.set("useNewUrlParser", true);
		mongoose.set("useFindAndModify", false);
		mongoose.set("useCreateIndex", true);
		mongoose
			.connect("mongodb+srv://shin:552208@cluster0.za7gi.mongodb.net/bth5?retryWrites=true&w=majority", {
				useNewUrlParser: true,
				useUnifiedTopology: true,
			})
			.then(() => {
				console.log("✅  Database connection successfully");
			})
			.catch(() => {
				console.log("❌  Database connection failed");
			});
	}
}

module.exports = new Database();
