(function () {
    'use strict';
    
    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService)
    
    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    
    function ToBuyController(ShoppingListCheckOffService) {
      var controller = this;
      controller.buyItems = ShoppingListCheckOffService.ItemsToBuy();
      controller.BuyAnItem = function (index) {
        ShoppingListCheckOffService.BuyItem(index);
      };
    };
    
    function AlreadyBoughtController(ShoppingListCheckOffService) {
      var controller = this;
      controller.boughtItems = ShoppingListCheckOffService.BoughtItems();
    }
    
    function ShoppingListCheckOffService() {
      var service = this;
      var itemstoBuy = [
        {name: "Milk", quantity:"1"},
        {name: "Noodles", quantity: "10"},
        {name: "Pasta", quantity: "2"},
        {name: "Pesto Sauce", quantity: "3"},
        {name: "Pineapple", quantity: "2"}
      ];
      var alreadyBought = [];
    
      this.ItemsToBuy = function () {
        return itemstoBuy;
      };
    
      this.BuyItem = function(index){
        var item = itemstoBuy[index];
        alreadyBought.push(item);
        itemstoBuy.splice(index, 1);
      };
    
      this.BoughtItems = function () {
        return alreadyBought;
      };
    
    };
    })();