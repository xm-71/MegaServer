require('dotenv').load();
var express = require('express');
var db = require('./config/db');
var Note = require('./models/note');
var bodyParser = require('body-Parser');
var app = express();

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.use(bodyParser.json());

app.get('/', function(req, res) {
  Note
    .find()
    .then(function(notes) {
      res.json(notes);
    });
});

app.post('/', function(reg,res){
  var note = new Note({
    title: req.body.note.title,
    body_html: req.body.body_html
  });
});

app.listen(3030, function() {
  console.log('Listening on http://localhost:3030...');
});
