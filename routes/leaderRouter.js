const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end('Will send all the leaders for you!');
    })
    .post((req, res, next) => {
        res.end('Will add the leader: ' + req.body.name +
            'with details: ' + req.body.description);
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on leaders');
    })
    .delete((req, res, next) => {
        res.end('Deleting all the leaders!');
    });

leaderRouter.route('/:leaderId')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end('Will send the leader number ' + req.params.leaderId + ' for you!');
    })
    .post((req, res, next) => {
        res.end('Will add the leader number ' + req.params.leaderId + ' with name  ' + req.body.name +
            'and with details: ' + req.body.description);
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('editing the leader number ' + req.params.leaderId + ' with name and description ' + req.body.name + ' ' + req.body.description + ' respectively');
    })
    .delete((req, res, next) => {
        res.end('Deleting the leader number ' + req.params.leaderId);
    });

module.exports = leaderRouter;