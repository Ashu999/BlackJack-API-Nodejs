const express = require('express');
const bodyParser = require('body-parser');

const insurance = express.Router();
insurance.use(bodyParser.json());

insurance.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end('Will send all the insurance to you!');
    })
    .post((req, res, next) => {
        res.end('Will add the insurance: ' + req.body.name + ' with details: ' + req.body.description);
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /insurance');
    })
    .delete((req, res, next) => {
        res.end('Deleting all insurance');
    });

insurance.route('/:insuranceId')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end('Will send details of the insurance: ' + req.params.insuranceId + ' to you!');
    })
    .post((req, res, next) => {
        res.statusCode = 403;
        res.end('POST operation not supported on /insurance/' + req.params.insuranceId);
    })
    .put((req, res, next) => {
        res.write('Updating the insurance: ' + req.params.insuranceId + '\n');
        res.end('Will update the insurance: ' + req.body.name +
            ' with details: ' + req.body.description);
    })
    .delete((req, res, next) => {
        res.end('Deleting insurance: ' + req.params.insuranceId);
    });

module.exports = insurance;
