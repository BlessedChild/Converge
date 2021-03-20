/*!
 * Converge
 * Copyright(c) 2021-2022 ChenZhaoxu
 * MIT Licensed
 */

'use strict';

/**
 * base prototype.
 * @public
 */

 var base = {};
 
 /**
 * Module exports.
 * @public
 */

 module.exports = base;

 /**
 * Return a value "5"
 *
 * @return {String}
 * @public
 */

defineGetter(base, 'gimmeFive', function gimmeFive(){
    return 5;
});

/**
 * Helper function for creating a getter on an object.
 *
 * @param {Object} obj
 * @param {String} name
 * @param {Function} getter
 * @private
 */

function defineGetter(obj, name, getter) {
    Object.defineProperty(obj, name, {
      configurable: true,
      enumerable: true,
      get: getter
    });
}