var express = require('express');

var app = express.createServer(express.logger());
for (var key in express){
    //console.log(key);    
}

app.use(express.static(__dirname + '/static'));
app.get('/mods', function(request, response) {
  response.send('what mods?');
});

app.get('/', function(request, response) {
  response.send('Hello World!, i am using express');
});

var port = process.env.C9_PORT || process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Listening on " + port);
});