const { application } = require("express");
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("EC2 ASG5 Version with pipeline for 5 instances - V5 ! ");
});

app.get("/status", (req, res) => {
  res.send("ok");
});

app.listen(port, () => {
  console.log('Example app listening at http://localhost: ${port}');
});
