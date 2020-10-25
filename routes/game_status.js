const express = require('express');
const bodyParser = require('body-parser');

const game_status = express.Router();
game_status.use(bodyParser.json());

game_status.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end('Will send all the game_status to you!');
    })
    .post((req, res, next) => {
        res.end('Will add the game_status: ' + req.body.name + ' with details: ' + req.body.description);
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /game_status');
    })
    .delete((req, res, next) => {
        res.end('Deleting all game_status');
    });

game_status.route('/:game_statusId')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end('Will send details of the game_status: ' + req.params.game_statusId + ' to you!');
    })
    .post((req, res, next) => {
        res.statusCode = 403;
        res.end('POST operation not supported on /game_status/' + req.params.game_statusId);
    })
    .put((req, res, next) => {
        res.write('Updating the game_status: ' + req.params.game_statusId + '\n');
        res.end('Will update the game_status: ' + req.body.name +
            ' with details: ' + req.body.description);
    })
    .delete((req, res, next) => {
        res.end('Deleting game_status: ' + req.params.game_statusId);
    });

module.exports = game_status;
