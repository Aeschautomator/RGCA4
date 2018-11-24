// PUll in required dependencies
var express = require('express');
var router = express.Router();

// Import the model (game.js) to use its database functions.
var game = require('../models/game.js');

// create the routes and associated logic
router.get('/', function(req, res) {
    game.selectAll(function(data) {
            var hbsObject = {
                games: data
            };
            // console.log(hbsObject);
            res.render('index', hbsObject);
        });
    });

    router.post('/games/', function(req, res) {
       game.insertOne([
           'romLink'
       ], [
           req.body.romLink
       ], function(data) {
           res.redirect('/');
       });
    });
            
       router.put('/games/:id', function(req, res) { 
        var condition = 'id = ' + req.params.id;

       game.update({
            devoured: true
        }, condition, function(data) {
            res.redirect('/');
        });        
    });

    // export routes for server.js to use.
    module.exports = router;
