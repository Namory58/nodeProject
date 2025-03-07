require('dotenv').config();
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var port = process.env.PORT;
var apiRouter = require("./apiRoutes");
var userRouter = require("./routes/users")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.use("/v1/api", apiRouter);
app.use("/v1/api/users",userRouter);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});