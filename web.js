var express = require('express');

var app = express.createServer(express.logger());
for (var key in express) {
    //console.log(key);    
}

app.use(express["static"](__dirname + '/static')); //changed from express.static since static is a reserved word
app.get('/mods', function(request, response) {
    response.send('what mods?');
});

app.get('/node_examples/', function(request, response) {
    response.send('what mods?');
});


app.get('/obj', function(req, res) {
    var obj1 = require("./personObject");
    res.send(obj1.getObj);
});

app.get('/', function(request, response) {
    response.sendfile('static/node.html');
    //response.send('Hello World!, i am using express');
});

app.get('*', function(request, response) {
    response.send('que?' + request.path);
});



var port = process.env.C9_PORT || process.env.PORT || 3000;
app.listen(port, function() {
    console.log("Listening on " + port);
});