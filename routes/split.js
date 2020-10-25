const express = require('express');
const bodyParser = require('body-parser');

const split = express.Router();
split.use(bodyParser.json());

split.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end('Will send all the split to you!');
    })
    .post((req, res, next) => {
        res.end('Will add the split: ' + req.body.name + ' with details: ' + req.body.description);
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /split');
    })
    .delete((req, res, next) => {
        res.end('Deleting all split');
    });

split.route('/:splitId')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end('Will send details of the split: ' + req.params.splitId + ' to you!');
    })
    .post((req, res, next) => {
        res.statusCode = 403;
        res.end('POST operation not supported on /split/' + req.params.splitId);
    })
    .put((req, res, next) => {
        res.write('Updating the split: ' + req.params.splitId + '\n');
        res.end('Will update the split: ' + req.body.name +
            ' with details: ' + req.body.description);
    })
    .delete((req, res, next) => {
        res.end('Deleting split: ' + req.params.splitId);
    });

module.exports = split;
