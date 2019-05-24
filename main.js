/**
 * Created by Cem Yilmaz on 12.05.2019.
 */
console.log("-----------------");
console.log("-- Main Script --");
console.log("-----------------");
// call modul http
var http = require('http');
var url = require('url');
var querystring = require('querystring');

// call own Modul news.js
var dt = require('./news');

http.createServer(function (req, res) {
    var urlObj = url.parse(req.url);
    var path = urlObj.pathname.substr(1).split('/'); // Split the firt route
    var pathStr = path.toString(); // Path to String

    console.log("ergebniss aus news:"+ dt.pruefen(pathStr));
    var query = querystring.parse(urlObj.query);
    //dt.pruefen("hallo");
    res.end();
}).listen(2323);
