/**
 * http://usejsdoc.org/
 */
var ejs = require('ejs');
var mysql = require('mysql');

function getConnection(){
	var connection = mysql.createConnection({
		host : 'localhost',
		user : 'root',
		password : 'root',
		database : 'test',
		port : 3306
	});
	return connection;
}
//fetching data from sql server
function fetchData(callback, sqlQuery){
	console.log("\n SQL Query: :"+sqlQuery);
	
	var connection = getConnection();
	
	connection.query(sqlQuery, function(err, rows, fields){
		if(err){
			console.log("Error: "+err.message);
		}
		else {
			console.log("DB results: "+rows);
			callback(err, rows);
		}
	});
	
	console.log("\n Connection closed");
	connection.end();
}
exports.fetchData = fetchData;