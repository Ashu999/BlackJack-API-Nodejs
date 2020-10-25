const express = require('express');
const bodyParser = require('body-parser');

const users = express.Router();
users.use(bodyParser.json());

users.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end('Will send all the users to you!');
    })
    .post((req, res, next) => {
        res.end('Will add the users: ' + req.body.name + ' with details: ' + req.body.description);
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /users');
    })
    .delete((req, res, next) => {
        res.end('Deleting all users');
    });

users.route('/:usersId')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end('Will send details of the users: ' + req.params.usersId + ' to you!');
    })
    .post((req, res, next) => {
        res.statusCode = 403;
        res.end('POST operation not supported on /users/' + req.params.usersId);
    })
    .put((req, res, next) => {
        res.write('Updating the users: ' + req.params.usersId + '\n');
        res.end('Will update the users: ' + req.body.name +
            ' with details: ' + req.body.description);
    })
    .delete((req, res, next) => {
        res.end('Deleting users: ' + req.params.usersId);
    });

module.exports = users;
