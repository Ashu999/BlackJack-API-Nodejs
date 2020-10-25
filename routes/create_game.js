const express = require('express');
const bodyParser = require('body-parser');

const create_game = express.Router();
create_game.use(bodyParser.json());

create_game.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end('Will send all the create_game to you!');
    })
    .post((req, res, next) => {
        res.end('Will add the create_game: ' + req.body.name + ' with details: ' + req.body.description);
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /create_game');
    })
    .delete((req, res, next) => {
        res.end('Deleting all create_game');
    });

create_game.route('/:create_gameId')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end('Will send details of the create_game: ' + req.params.create_gameId + ' to you!');
    })
    .post((req, res, next) => {
        res.statusCode = 403;
        res.end('POST operation not supported on /create_game/' + req.params.create_gameId);
    })
    .put((req, res, next) => {
        res.write('Updating the create_game: ' + req.params.create_gameId + '\n');
        res.end('Will update the create_game: ' + req.body.name +
            ' with details: ' + req.body.description);
    })
    .delete((req, res, next) => {
        res.end('Deleting create_game: ' + req.params.create_gameId);
    });

module.exports = create_game;
