var cradle = require('cradle'); 
var express = require('express'); 

var db = new(cradle.Connection)().database('swtor_classes');	
var app = express.createServer(); 

// configuration
app.configure(function(){
    app.use(express.methodOverride());
    app.use(express.bodyParser());
    app.use(app.router);
});

app.configure('development', function(){
	app.use(express.static(__dirname + '/public'))
}); 

app.get('/list', function(req, res){
	db.view('ac/list', function(err, res){
		res.forEach(function(row){
			console.log(row.internal);
		}); 
	}); 
}); 

app.get('/builder/:ac?', function(req, res){
	res.send(req.params.ac);
});

app.listen(3000);