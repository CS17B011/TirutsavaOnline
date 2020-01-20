const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 4000;
const cors = require("cors");
const path = require("path");
//const passport = require('passport');
//const users = require('./routes/users');
const mongoose = require("mongoose");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose
  .connect(
    "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false",
    { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
  )
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
