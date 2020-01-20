const express = require('express');
const router = express.Router();
const loggedin = require('../services/middleware');

const Query = require('../models/Query.js');

/*
  GET,PUT(Answer Only) => Admin
  POST,PUT,DELETE => User specific
*/

//Route GET /queries
//Getting all Asked Questions
router.get('/', (req,res) => {
  Query.find()
      .sort({ date: 1 })  //Increasing sorting
      .then((questions) => res.json(questions))
});

//Route POST queries/create
//Adding new Question
router.post('/create', loggedin ,(req,res) => {
  const newQuery = Query({
    question: req.body.question,
    email: req.body.email
  });
  newQuery.save()
  .then(ques => res.json(ques))
  .catch(err => res.json({"error":"Somethin went wrong in queries/create"}));
});


module.exports = router;