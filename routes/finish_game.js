const express = require('express');
const bodyParser = require('body-parser');

const finish_game = express.Router();
finish_game.use(bodyParser.json());

finish_game.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end('Will send all the finish_game to you!');
    })
    .post((req, res, next) => {
        res.end('Will add the finish_game: ' + req.body.name + ' with details: ' + req.body.description);
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /finish_game');
    })
    .delete((req, res, next) => {
        res.end('Deleting all finish_game');
    });

finish_game.route('/:finish_gameId')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end('Will send details of the finish_game: ' + req.params.finish_gameId + ' to you!');
    })
    .post((req, res, next) => {
        res.statusCode = 403;
        res.end('POST operation not supported on /finish_game/' + req.params.finish_gameId);
    })
    .put((req, res, next) => {
        res.write('Updating the finish_game: ' + req.params.finish_gameId + '\n');
        res.end('Will update the finish_game: ' + req.body.name +
            ' with details: ' + req.body.description);
    })
    .delete((req, res, next) => {
        res.end('Deleting finish_game: ' + req.params.finish_gameId);
    });

module.exports = finish_game;
