const keep_alive = require('./keep_alive.js') //index.js Const Kýsýmlarýna


var http = require('http');

http.createServer(function (req, res) {
  res.write("I'm alive");
  res.end();
}).listen(8080);

//keep_alive.js dosyasýný oluþtur ve içine bunu at