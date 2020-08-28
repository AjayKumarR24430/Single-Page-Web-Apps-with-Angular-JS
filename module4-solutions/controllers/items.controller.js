(function() {
    'use strict';
  
    angular.module('MenuApp')
      .controller('ItemsController', ItemsController);
  
    itemsController.$inject = ['items'];
  
    function ItemsController(items) {
      var itemsCtrl = this;
  
      itemsCtrl.items = items;
    }
  })();