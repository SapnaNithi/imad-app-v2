var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function (req, res) {
    res.send('article one hehe has come');
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/wall.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'wall.jpg'));
});

app.get('/ui/contact.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'contact.html'));
});

app.get('/ui/camper.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'camper.jpg'));
});

app.get('/ui/my-file.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'my-file.html'));
});

var counter=0;
app.get('/counter', function(req,res){
    counter=counter+1;
    res.send(counter.toString());
});

app.get('/kutta', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'kutta.html'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
