var http = require('http');
var fs = require('fs');
var url = require('url');

var server = http.createServer(function (req, res) {
	var urlArg = url.parse(req.url, true);
	var parts = urlArg.path.split('&');
	var widthsize;
	var heightsize;
	var address;
	var pathimg;
	if (parts.length == 4) {
		parts.forEach(function(arg) {
			arg = arg.replace(/^\//, "");
			arg = arg.replace(/%23/, "#");
			if (arg.search(/width/i) == 0) widthsize = arg.split('=')[1];
			if (arg.search(/height/i) == 0) heightsize = arg.split('=')[1];
			if (arg.search(/address/i) == 0) address = arg.split('=')[1];
			if (arg.search(/pathimg/i) == 0) pathimg = arg.split('=')[1];
		});
	widthsize = Number(widthsize);
	heightsize = Number(heightsize);
	var phantom=require('node-phantom-simple');
	phantom.create(function(err,ph) {
		return ph.createPage(function(err,page) {
			page.set('viewportSize', {width:widthsize,height:heightsize});
			return page.open(address, function(err,status) {
				console.log('opened site? ' + status);
				setTimeout(function () {
					page.render(pathimg, function(err) {
					if (err){
						ph.exit();
						throw new Error('page.render failed');
					} else {
					console.log('Done!');
					ph.exit();
					var img = fs.readFileSync(pathimg);
					res.writeHead(200, {'Content-Type': 'image/jpeg' });
					res.end(img, 'binary');
	}});},5*1000);});});});}
});

server.listen(1422);
