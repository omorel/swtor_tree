var cradle 		= require('cradle'); 
var express 	= require('express'); 

var db 			= new(cradle.Connection)().database('swtor_classes');	
var app 		= express.createServer(); 

var advance_classes = []; 
var classes			= []; 

// configuration
app.configure(function(){
    app.use(express.methodOverride());
    app.use(express.bodyParser());
    app.use(app.router);
});

app.configure('development', function(){
	app.use(express.static(__dirname + '/public'))
}); 

// routers
app.get('/list', function(req, res){
	db.view('classes/all', function(err, rows){
		var classes_list = []; 
		
		rows.forEach(function(row){
			classes_list.push(row); 
		}); 
		
		classes_txt = classes_list.join(', '); 
		res.send(classes_txt);
	}); 
}); 

app.get('/builder/:ac?', function(req, res){
	res.send(req.params.ac);
});

app.get('/update/classes', function(){
	db.view('classes/all', function(err, rows){
		var classes_list = []; 
		rows.forEach(function(row){
			classes_list.push(row); 
		}); 
		classes = classes_list; 
	});	
}); 

app.get('/update/advance_classes', function(){
	
}); 

app.listen(3000);