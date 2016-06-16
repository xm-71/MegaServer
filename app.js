var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.json([
    {
      title: 'Hardcoded note',
      body_html: ' My cool note.'
    },
    {
      title:'Also Hardcoded',
      body_html:'So sweet'
    }
  ]);
});

app.listen(3030, function(){
  console.log('Listening on http://localhost:3030...');
});
