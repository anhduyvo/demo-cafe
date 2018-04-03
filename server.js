﻿var express = require('express');
var http = require('http');
var path = require('path');

var server = express();
server.set('port', process.env.PORT || 8080);

// register web app
var public = path.join(__dirname, 'public');
server.use('/', express.static(public, { index: 'index.html' }));
server.use('/index', express.static(public, { index: 'index.html' }));
server.use('/alternate', express.static(public, { index: 'alternate.html' }));

// export
module.exports = server;