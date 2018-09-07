var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var sessions = require('express-session');
var session;

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(sessions({
  secret: 'z5116z1cac61',
  resave: false,
  saveUnitialiszed: true
}))

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get('/login', function(request, response) {
  response.sendFile(__dirname + '/views/login.html');
});

app.get('/wrong-login', function(request, response) {
  response.sendFile(__dirname + '/views/wrong-login.html');
});

app.post('/login', function(req, resp) {
  //resp.end(JSON.stringify(req.body));
  
  session = req.session;
  if(req.body.username == 'user' && req.body.password == 'user') {
    session.uniqueID= req.body.username;    
  }
  resp.redirect('/redirects');
});

app.get('/redirects', function(req, resp) {
  session = req.session;
  if(session.uniqueID){
    resp.redirect('/login');
  }else{
      resp.redirect('/wrong-login');
  }
});

app.post('/wrong-login', function(req, resp){
  
 resp.sendFile(__dirname + '/views/index.html');  
});



var listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
