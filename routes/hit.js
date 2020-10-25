const express = require('express');
const bodyParser = require('body-parser');

const hit = express.Router();
hit.use(bodyParser.json());

hit.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end('Will send all the hit to you!');
    })
    .post((req, res, next) => {
        res.end('Will add the hit: ' + req.body.name + ' with details: ' + req.body.description);
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /hit');
    })
    .delete((req, res, next) => {
        res.end('Deleting all hit');
    });

hit.route('/:hitId')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end('Will send details of the hit: ' + req.params.hitId + ' to you!');
    })
    .post((req, res, next) => {
        res.statusCode = 403;
        res.end('POST operation not supported on /hit/' + req.params.hitId);
    })
    .put((req, res, next) => {
        res.write('Updating the hit: ' + req.params.hitId + '\n');
        res.end('Will update the hit: ' + req.body.name +
            ' with details: ' + req.body.description);
    })
    .delete((req, res, next) => {
        res.end('Deleting hit: ' + req.params.hitId);
    });

module.exports = hit;
