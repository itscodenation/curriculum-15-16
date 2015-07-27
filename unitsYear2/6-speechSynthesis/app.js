var express = require('express');
var request = require('request');
var http    = require('http');
var path    = require('path');

if (!process.env.CLIENT_ID) {
    console.error('Environment variable CLIENT_ID must be set.');
    process.exit(-1);
}

if (!process.env.CLIENT_SECRET) {
    console.error('Environment variable CLIENT_SECRET must be set.');
    process.exit(-1);
}

var app = express();

var oauthUrl = 'https://datamarket.accesscontrol.windows.net/v2/OAuth2-13';

var translatorScope = "http://api.microsofttranslator.com";
var translateUrl = "http://api.microsofttranslator.com/v2/Ajax.svc/Translate"

app.use(express.static(path.join(__dirname, 'public')));

app.get('/token', function(req, res) {
    var formData = {
                    client_id: process.env.CLIENT_ID, 
                    client_secret: process.env.CLIENT_SECRET,
                    scope: translatorScope,
                    grant_type: "client_credentials"
                   };
    request.post(oauthUrl).form(formData).pipe(res);
});

app.get('/translate', function(req, res){
    request.get({
        url: translateUrl, 
        qs: req.query,
        headers: {
            Authorization: req.get("Authorization")
        }
    }).pipe(res);
})

var httpServer = http.createServer(app);
httpServer.listen(process.env.PORT, process.env.IP);