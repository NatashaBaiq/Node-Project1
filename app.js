var express = require('express');
var app = express();
var data = require('./data.json');
var port = 5000;


app.set('views', __dirname +'/views');
app.set('view engine', 'ejs');

app.set('data', data);

app.use(express.static('./public'));

app.use(require('./route/index_route'));
app.use(require('./route/users_route'));
app.use(require('./route/user_route'));


app.listen(port, function(){
	console.log('entering port 5000')
})