const express = require('express');
const proxy = require('express-http-proxy');
const app = express();

app.use('/', express.static('public'));

app.get('/', function (req, res) {
  res.send(index.html);
});

app.listen(3000, function () {
  console.log('Server running on http://localhost:3000/');
});
