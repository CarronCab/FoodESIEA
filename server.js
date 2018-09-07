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
    resp.redirect('/');
  }else{
     resp.send('wrong');
  }
});

var listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
