var db = require('mongoose');
db.connect('mongodb://node:node@ds059135.mlab.com:59135/meganote');

module.exports = db;
