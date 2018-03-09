'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the appApp
 */
angular
  .module('appApp')
  .controller('HomeCtrl', function($scope, pokemonAPIservice) {
    $scope.change = function() {
      if ($scope.search !== undefined) {
        $scope.fetch();
      }
    };

    $scope.fetch = function() {
      return pokemonAPIservice.getDetails($scope.search).then(function(data) {
        $scope.gotData = data;
      });
    };
  });
