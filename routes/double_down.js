const express = require('express');
const bodyParser = require('body-parser');

const double_down = express.Router();
double_down.use(bodyParser.json());

double_down.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end('Will send all the double_down to you!');
    })
    .post((req, res, next) => {
        res.end('Will add the double_down: ' + req.body.name + ' with details: ' + req.body.description);
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /double_down');
    })
    .delete((req, res, next) => {
        res.end('Deleting all double_down');
    });

double_down.route('/:double_downId')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end('Will send details of the double_down: ' + req.params.double_downId + ' to you!');
    })
    .post((req, res, next) => {
        res.statusCode = 403;
        res.end('POST operation not supported on /double_down/' + req.params.double_downId);
    })
    .put((req, res, next) => {
        res.write('Updating the double_down: ' + req.params.double_downId + '\n');
        res.end('Will update the double_down: ' + req.body.name +
            ' with details: ' + req.body.description);
    })
    .delete((req, res, next) => {
        res.end('Deleting double_down: ' + req.params.double_downId);
    });

module.exports = double_down;
