'use strict';

/**
 * @ngdoc service
 * @name appApp.service
 * @description
 * # service
 * Service in the appApp.
 */
angular.module('appApp').factory('pokemonAPIservice', function($http) {
  var pokemonAPI = {};

  pokemonAPI.getDetails = function(number) {
    return $http.get('https://pokeapi.co/api/v2/pokemon/' + number + '/').then(
      // return $http.get('1.json').then(
      function(response) {
        console.log(response.data);
        return response.data;
      },
      function(error) {
        console.log(error);
      }
    );
  };

  return pokemonAPI;
});
