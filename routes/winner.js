const express = require('express');
const bodyParser = require('body-parser');

const winner = express.Router();
winner.use(bodyParser.json());

winner.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end('Will send all the winner to you!');
    })
    .post((req, res, next) => {
        res.end('Will add the winner: ' + req.body.name + ' with details: ' + req.body.description);
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /winner');
    })
    .delete((req, res, next) => {
        res.end('Deleting all winner');
    });

winner.route('/:winnerId')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end('Will send details of the winner: ' + req.params.winnerId + ' to you!');
    })
    .post((req, res, next) => {
        res.statusCode = 403;
        res.end('POST operation not supported on /winner/' + req.params.winnerId);
    })
    .put((req, res, next) => {
        res.write('Updating the winner: ' + req.params.winnerId + '\n');
        res.end('Will update the winner: ' + req.body.name +
            ' with details: ' + req.body.description);
    })
    .delete((req, res, next) => {
        res.end('Deleting winner: ' + req.params.winnerId);
    });

module.exports = winner;
