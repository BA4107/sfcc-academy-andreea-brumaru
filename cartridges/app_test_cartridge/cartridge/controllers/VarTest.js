'use strict';

var server = require('server');

// server.extend(module.superModule);

server.get("ShowVariable", function(req, res, next) 
{
    res.render("training/vartest");
    return next();
});

module.exports = server.exports();