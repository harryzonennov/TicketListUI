var cors_proxy = require('cors-anywhere');

// Listen on a specific IP Address
// 0.0.0.0 equals localhost
var host = process.env.HOST || '127.0.0.1' ;

// Listen on a specific port, adjust if necessary
var port = process.env.PORT  || 8080;

cors_proxy.createServer({
    originWhitelist: [], // Allow all origins
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2']
}).listen(port, host, function() {
    console.log('Running CORS Anywhere on ' + host + ':' + port);
});