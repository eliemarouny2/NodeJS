const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end('Will send all the promotions for you!');
    })
    .post((req, res, next) => {
        res.end('Will add the promo: ' + req.body.name +
            'with details: ' + req.body.description);
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on promotions');
    })
    .delete((req, res, next) => {
        res.end('Deleting all the promotions!');
    });

promoRouter.route('/:promoId')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end('Will send the promo number ' + req.params.promoId + ' for you!');
    })
    .post((req, res, next) => {
        res.end('Will add the promo number ' + req.params.promoId + ' with name  ' + req.body.name +
            'and with details: ' + req.body.description);
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('editing the promo number ' + req.params.promoId + ' with name and description ' + req.body.name + ' ' + req.body.description + ' respectively');
    })
    .delete((req, res, next) => {
        res.end('Deleting the promo number ' + req.params.promoId);
    });

module.exports = promoRouter;