'use strict';


/**
 * create an order
 * 
 *
 * body Order create an order
 * returns Order
 **/
exports.createOrder = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : "id",
  "shipDate" : "2000-01-23T04:56:07.000+00:00",
  "complete" : false,
  "userId" : "userId",
  "articles" : [ "articles", "articles" ],
  "status" : "placed"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Find purchase order by ID
 * Find purchase order by ID
 *
 * orderId String ID of the order that needs to be fetched
 * returns Order
 **/
exports.getOrderById = function(orderId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : "id",
  "shipDate" : "2000-01-23T04:56:07.000+00:00",
  "complete" : false,
  "userId" : "userId",
  "articles" : [ "articles", "articles" ],
  "status" : "placed"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

