
require("dotenv").config();

var express = require("express");
var app = express();
var port = process.env.port;
var bodyParser = require("body-parser");

var apiRouter = require("./apiRoutes");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/",(req,res)=>{
    res.send("Hello World");
})

app.use("/v1/api", apiRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
