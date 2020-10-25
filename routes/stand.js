const express = require('express');
const bodyParser = require('body-parser');

const stand = express.Router();
stand.use(bodyParser.json());

stand.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end('Will send all the stand to you!');
    })
    .post((req, res, next) => {
        res.end('Will add the stand: ' + req.body.name + ' with details: ' + req.body.description);
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /stand');
    })
    .delete((req, res, next) => {
        res.end('Deleting all stand');
    });

stand.route('/:standId')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end('Will send details of the stand: ' + req.params.standId + ' to you!');
    })
    .post((req, res, next) => {
        res.statusCode = 403;
        res.end('POST operation not supported on /stand/' + req.params.standId);
    })
    .put((req, res, next) => {
        res.write('Updating the stand: ' + req.params.standId + '\n');
        res.end('Will update the stand: ' + req.body.name +
            ' with details: ' + req.body.description);
    })
    .delete((req, res, next) => {
        res.end('Deleting stand: ' + req.params.standId);
    });

module.exports = stand;
