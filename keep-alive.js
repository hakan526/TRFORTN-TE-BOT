const keep_alive = require('./keep_alive.js') //index.js Const K�s�mlar�na


var http = require('http');

http.createServer(function (req, res) {
  res.write("I'm alive");
  res.end();
}).listen(8080);

//keep_alive.js dosyas�n� olu�tur ve i�ine bunu at