'use strict';

/**
 * @ngdoc filter
 * @name appApp.filter:filter
 * @function
 * @description
 * # filter
 * Filter in the appApp.
 */
angular.module('appApp')
  .filter('filter', function () {
    return function (input) {
      return 'filter filter: ' + input;
    };
  });
