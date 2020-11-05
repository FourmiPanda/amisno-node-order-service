'use strict';

var utils = require('../utils/writer.js');
var Store = require('../service/StoreService');

module.exports.createOrder = function createOrder (req, res, next) {
  var body = req.swagger.params['body'].value;
  Store.createOrder(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getOrderById = function getOrderById (req, res, next) {
  var orderId = req.swagger.params['orderId'].value;
  Store.getOrderById(orderId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
