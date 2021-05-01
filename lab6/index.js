const http = require('http')

http.createServer(function(request,response){

	response.setHeader("Content-Type","text/html; charset=utf-8;");

	if(request.url === "/home" || request.url === "/"){
		response.write('<h2> You write: home </h2>');
	}

	else if(request.url === "/is-91-016"){
		response.write('<h2> Літус Аліна, IC-91, ІІ курс</h2>');
	}
	else{
		response.write('<h2>Error 404. Not found</h2>');
	}
	response.end();
}).listen(3000);