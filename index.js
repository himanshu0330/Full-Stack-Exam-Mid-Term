const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const PORT = 4000;
const hbs = require("hbs");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

app.use("/", require("./routes/recipe"));

mongoose.connect("mongodb://localhost:27017/myrecipies").then(() => {
  app.listen(PORT, () => {
    console.log("http://localhost:" + PORT);
  });
});
