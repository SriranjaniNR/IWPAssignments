(function () {
'use strict';



angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);
ToBuyController. $inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService)
{
    var shoplist = this;
    shoplist.List1 = ShoppingListCheckOffService.getItems();
    shoplist.buyitem = function (itemIndex) {
    	ShoppingListCheckOffService.buyitem(itemIndex);
    };
  
}
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService)
{
	var boughtitem = this;
	boughtitem.list2 = ShoppingListCheckOffService.bItems();
}

function ShoppingListCheckOffService() {
  var service = this;
 // List of shopping items
  var list2 = [];

  var List1 = [
  {
    name: "Milk",
    quantity: "2"
  },
  {
    name: "Donuts",
    quantity: "2"
  },
  {
    name: "Cookies",
    quantity: "10"
  },
  {
    name: "Chocolate",
    quantity: "5"
  },
  {
    name: "Candy",
    quantity: "10"
  },
  {
    name: "Pepsi",
    quantity: "5"
  },
  {
    name: "Chips",
    quantity: "5"
  },
  {
    name: "RootBeer",
    quantity: "5"
  },
  {
    name: "Popcorn",
    quantity: "1"
  },
  {
    name: "Icecream",
    quantity: "1"
  }
  ];
  service.buyitem = function (itemIndex){
  	var item =List1[itemIndex];
  	list2.push(item);
  	List1.splice(itemIndex, 1);

  }


  service.removeItem = function (itemIndex) {

  
    List1.splice(itemIndex, 1);

  };

  service.getItems = function () {
    return List1;
  };
  service.bItems = function () {
    return list2;
  };
}
})();


