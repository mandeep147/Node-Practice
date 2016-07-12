
var ejs = require('ejs');
var mysql = require('./mysql');

function signin(req,res){	
	ejs.renderFile('../views/signin.ejs', function(err, result){
		if(!err){
			res.end(result);
		}
		else{
			res.end('Error');
			console.log(err);
		}
	});
}

function afterSignIn(req,res){
	var getUser = "select * from user where username= '" + 
	req.param("inputUsername")+"' and password='" + 
	req.param("inputPassword")+ "'";
	console.log("Query is: "+getUser);
	
	mysql.fetchData(function(err, results){
		if(err){
			throw err;
		}
		else {
			if(results.length > 0){
				console.log("valid login");
				ejs.renderFile('../views/successLogin.ejs',{data: results}, function(err,results){
					if(!err){
						res.end(results);
					}
					else{
						res.end("error");
						console.log(err);
					}
				});
			}
			else {
				console.log("invalid login");
				ejs.renderFile('../views/failLogin.ejs', function(err, results){
					if(!err){
						res.end(results);
					}
					else{
						res.end("error");
						console.log(err);
					}
				});
			}
		}
	}, getUser);
}

function getAllUsers(req, res){
	var getAllUsers = "select * from user";
	console.log("Query: "+getAllUsers);
	
	mysql.fetchData(function(err, results){
		if(err){
			throw err;
		}
		else{
			if(results.length > 0){
				var rows = results;
				var jsonString = JSON.stringify(results);
				var jsonParse = JSON.parse(jsonString);
				console.log("Results Type:" + (typeof results));
				console.log("Result Element Type:" + (typeof rows[0].emailid));				
				console.log("Results Stringify Type:" + (typeof jsonString));
				console.log("Results: "+ (results));
				console.log("Result Element: "+ (rows[0].emailid));
				console.log("Results Stringify:" + (jsonString));
				console.log("Results Parse:" + (jsonParse));
				
				ejs.renderFile('./views/successLogin.ejs', {data: jsonParse}, function(err, result){
					if(!err){
						res.end(results);
					}
					else{
						res.end("error");
						console.log(err);
					}
				});
			}
			else{
				console.log("no user exist");
				ejs.renderFile('./views/failLogin.ejs', function(err, results){
					if(!err){
						res.end(results);
					}
					else{
						res.end("error");
						console.log(err);
					}
				});
			}
		}
	}, getAllUsers);
}

exports.signin = signin;
exports.afterSignIn = afterSignIn;
exports.getAllUsers = getAllUsers;