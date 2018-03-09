'use strict';

/**
 * @ngdoc directive
 * @name appApp.directive:directive
 * @description
 * # directive
 */
angular
  .module('appApp')
  .directive('ngEnter', function() {
    return function(scope, element, attrs) {
      element.bind('keydown keypress', function(event) {
        if (event.which === 13) {
          scope.$apply(function() {
            scope.$eval(attrs.ngEnter);
          });

          event.preventDefault();
        }
      });
    };
  })
  .directive('lowercase', function() {
    return {
      require: 'ngModel',
      link: function(scope, element, attrs, modelCtrl) {
        var lowercase = function(inputValue) {
          if (inputValue === undefined) {
            inputValue = '';
          }
          var lowercased = inputValue.toLowerCase();
          if (lowercased !== inputValue) {
            // see where the cursor is before the update so that we can set it back
            var selection = element[0].selectionStart;
            modelCtrl.$setViewValue(lowercased);
            modelCtrl.$render();
            // set back the cursor after rendering
            element[0].selectionStart = selection;
            element[0].selectionEnd = selection;
          }
          return lowercased;
        };
        modelCtrl.$parsers.push(lowercase);
        lowercase(scope[attrs.ngModel]); // capitalize initial value
      }
    };
  });
