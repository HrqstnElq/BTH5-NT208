//18521531 - Vo Huu Tri

const express = require("express");
const cookieParser = require("cookie-parser");
const http = require("http");
const bodyParser = require("body-parser");
const cors = require("cors");
require("./database");
require("dotenv").config();

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const adminRouter = require("./routes/admin");

const app = express();

//allow all Cross-Origin Requests
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/admin", adminRouter);
app.use("/users", usersRouter);

const httpServer = http.createServer(app);
const port = process.env.PORT || 3000;

httpServer.listen(port, () => {
	console.log(`Listen on http://localhost:${port}`);
});
