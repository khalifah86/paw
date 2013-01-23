var connect = require('connect');
    connectRoute = require('connect-route'),
    fs = require('fs');
    

var route = function (r) {
    r.get('/:r', function (_req, _res, _next) {
        switch (_req.params.r) {
            case 'api'      :   fs.readFile('./public/api/index.html', function(err, data) {
                                    _res.writeHead(200, { 'Content-Type': 'text/html' });
                                    _res.write(data);
                                    _res.end(' ');
                                }); break;
            case 'page'     :   fs.readFile('../public/' + _req.params.r + '/index.html', function(err, data) {
                                    _res.writeHead(200, { 'Content-Type': 'text/html' });
                                    _res.write(data);
                                    _res.end(' ');
                                }); break;
        }
    });
    
    r.get('/:r/:key/:ws/:func/', function (_req, _res, _next) {
        if (_req.params.r === 'api') {
            //-- get validation "key" from DB
            //-- get validation "workspace" path from DB
            //-- get validation "function" definition file path from DB
            
            //-- return to Object
        }
    });
};

var connRoute = connectRoute(route);

var routing = {
    fnRoute: route,
    doRoute: connRoute
};

exports.router = routing;