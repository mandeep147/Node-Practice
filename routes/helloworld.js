/**
 * New node file
 */
//exports the function to app.js
exports.getHelloWorld = function(req,res){
	console.log("In getHelloWorld()");
	var res_str = {"message" : "HelloWorld"};
	
	res.send(JSON.stringify(res_str));
	
	res.end();
}