var express = require('express');
var bodyParser = require('body-parser');
var sessions = require('express-session');

var session;

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(sessions({
  secret: 'z5116z1cac61',
  resave: false,
  saveUnitialiszed: true
}))

app.get('/login', function(req, resp) {
  resp.sendFile(__dirname + '/views/login.html');
});

app.post('/login', function(req, resp) {
  //resp.end(JSON.stringify(req.body));
  session = req.session;
  if(req.body.username == 'admin' && req.body.password == 'admin') {
    session.id= req.body.username;    
  }
  resp.redirect('/redirects');
});

app.get('/redirects', function(req, resp) {
  session = req.session;
  if(session.id){
    resp.redirect('/admin');
  }else{
    resp.end('who are you??');
  }
});

var listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});