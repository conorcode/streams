var http = require('http');
const fs = require('fs');

//var myReadStream = fs.createReadStream(__dirname + '/large.txt','utf8');
var server = http.createServer();
/*
myReadStream.on('data', function(chunk){
  console.log('chunk received!!!');
  //console.log(chunk);
});
*/
server.on('request', (req, res) => {
  var src = fs.createReadStream(__dirname + '/large.txt','utf8');
  src.pipe(res);
})
.on('end', function () {
  console.log('end!!!!!!!!!!!!!!!!!!!!!!!!1');
});

server.listen(8000);
