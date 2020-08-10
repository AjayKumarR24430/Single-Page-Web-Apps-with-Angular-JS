(function () {

  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService)

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var toBuy = this;
    toBuy.items = ShoppingListCheckOffService.getToBuyItems();

    toBuy.addItem = function(name,quantity) {
      ShoppingListCheckOffService.addItem(name,quantity);      
    }

    toBuy.removeToBuyItem = function(index) {
      ShoppingListCheckOffService.removeToBuyItem(index);
    }

    toBuy.isEmpty = function() {
      return toBuy.items.length == 0;
    }
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var bought = this;
    bought.items = ShoppingListCheckOffService.getBoughtItems();

    bought.isEmpty = function() {
      return bought.items.length == 0;
    }
  }

  function ShoppingListCheckOffService() {
    var service = this;

    //List to Buy items
    var toBuyItems = [
        { name: "Chocolate cookies", quantity: 6 },
        { name: "Lays", quantity: 8 },
        { name: "Cheese", quantity: 4 },
        { name: "Pepper", quantity: 5 },
        { name: "Doritos", quantity: 15 }        
    ];

    //List Bought items
    var boughtItems = [];

    service.addItem = function (itemName, quantity) {
      var item = {
        name: itemName,
        quantity: quantity
      };
      boughtItems.push(item);      
    };

    service.removeToBuyItem = function (itemIndex) {
      toBuyItems.splice(itemIndex, 1);
    };

    service.getToBuyItems = function () {
      return toBuyItems;
    };

    service.getBoughtItems = function () {
      return boughtItems;
    };
  };
})();