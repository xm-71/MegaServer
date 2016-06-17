require('dotenv').load();
var express = require('express');
var db = require('./config/db');
var Note = require('./models/note');
var bodyParser = require('body-Parser');
var app = express();

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(bodyParser.json());

app.get('/', function(req, res) {
  Note
    .find()
    .sort({ update_at: 'desc' })
    .then(function(notes) {
      res.json(notes);
    });
});

app.get('/:id', function(req, res) {
  Note
  .findOne({
    _id:params.id
  })
  .then(function(note){
    res.json(note);
  });
});

app.post('/', function(reg,res){
  var note = new Note({
    title: req.body.note.title,
    body_html: req.body.body_html
  });
  note
  .save()
  .then(function(noteData){
    res.json({
      message: 'Successfully updated note',
      note: noteDate
    });
  });
});

app.listen(3030, function() {
  console.log('Listening on http://localhost:3030...');
});
