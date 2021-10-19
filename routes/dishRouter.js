const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end('Will send all the dishes for you!');
    })
    .post((req, res, next) => {
        res.end('Will add the dish: ' + req.body.name +
            'with details: ' + req.body.description);
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on dishes');
    })
    .delete((req, res, next) => {
        res.end('Deleting all the dishes!');
    });

dishRouter.route('/:dishId')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end('Will send the dish number ' + req.params.dishId + ' for you!');
    })
    .post((req, res, next) => {
        res.end('Will add the dish number ' + req.params.dishId + ' with name  ' + req.body.name +
            'and with details: ' + req.body.description);
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('editing the dish number ' + req.params.dishId + ' with name and description ' + req.body.name + ' ' + req.body.description + ' respectively');
    })
    .delete((req, res, next) => {
        res.end('Deleting the dish number ' + req.params.dishId);
    });

module.exports = dishRouter;