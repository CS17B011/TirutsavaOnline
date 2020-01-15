require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 80;
const cors = require('cors');
const path = require('path');
//const passport = require('passport');
//const users = require('./routes/users');
const mongoose = require("mongoose");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose
  .connect("mongodb://localhost/tirutsava2020", { useNewUrlParser: true })
  .then(() => console.log("Database is Connected..."))
  .catch(err => console.log(err));

//Routes

app.use("/api/events", require("./routes/events.js"));
app.use("/api/faqs", require("./routes/faqs.js"));
app.use("/api/queries", require("./routes/queries.js"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, function() {
  console.log("Server is running on Port: ", PORT);
});
