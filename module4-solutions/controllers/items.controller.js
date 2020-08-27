(function() {
    'use strict';
  
    angular.module('MenuApp')
      .controller('itemsController', itemsController);
  
    itemsController.$inject = ['$stateParams', 'MenuDataService', 'items'];
  
    function itemsController($stateParams, MenuDataService, items) {
      var menuItems = this;
  
      menuItems.items = items;
      menuItems.categoryName = $stateParams.categoryName;
    }
  })();