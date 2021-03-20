/*!
 * Converge
 * Copyright(c) 2021-2022 ChenZhaoxu
 * MIT Licensed
 */

'use strict';

/**
 * Module dependencies.
 */

var b = require('./base');

/**
 * Expose `createApplication()`.
 */

exports = module.exports = createApplication;

/**
 * Create an express application.
 *
 * @return {Function}
 * @api public
 */

function createApplication() {
  var app = {};
  // expose the prototype that will get set on base
  app.base = Object.create(b, {
    app: { configurable: true, enumerable: true, writable: true, value: app }
  })
  return app;
}

/**
 * Expose the prototypes. 
 * 
 * If: test.js
 * const Converge = require("./converge");
 * const App = Converge();)
 * useage: App.base.gimmeFive // Output: 5
 */

exports.base = b;