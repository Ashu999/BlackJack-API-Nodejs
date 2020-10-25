const express = require('express');
const bodyParser = require('body-parser');

const deal = express.Router();
deal.use(bodyParser.json());

deal.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end('Will send all the deal to you!');
    })
    .post((req, res, next) => {
        res.end('Will add the deal: ' + req.body.name + ' with details: ' + req.body.description);
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /deal');
    })
    .delete((req, res, next) => {
        res.end('Deleting all deal');
    });

deal.route('/:dealId')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end('Will send details of the deal: ' + req.params.dealId + ' to you!');
    })
    .post((req, res, next) => {
        res.statusCode = 403;
        res.end('POST operation not supported on /deal/' + req.params.dealId);
    })
    .put((req, res, next) => {
        res.write('Updating the deal: ' + req.params.dealId + '\n');
        res.end('Will update the deal: ' + req.body.name +
            ' with details: ' + req.body.description);
    })
    .delete((req, res, next) => {
        res.end('Deleting deal: ' + req.params.dealId);
    });

module.exports = deal;
