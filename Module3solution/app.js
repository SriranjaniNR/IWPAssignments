(function() {
'use strict';
angular.module('narrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
.directive('foundItems', FoundItems);

function FoundItems(){

var ddo = {
    templateUrl: 'founditems.html',
    scope: {
      items: '<',
      onRemove: '&'
    },
    // controller: 'ShoppingListDirectiveController as list',
    controller: FoundItemsController,
    controllerAs: 'list',
    bindToController: true
  };
 return ddo;

}
function FoundItemsController() {
    var list = 'this';
    list.checkFoundList = function (){
        return typeof list.items !== 'undefined' && list.items.length ===0
    };

}
NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService){
    var menu = this;
    menu.narrowItDown = function (searchTerm) {
        if(searchTerm) {
        var promise = MenuSearchService.getMatchedMenuItems(searchTerm);
        promise.then(function (response)
        {menu.found = response;
        }).catch(function (error)
        {console.log(error);});  
          
    
        }else {
            menu.found = [];
        }
    };
    menu.removeItem = function (itemIndex) {
        this.lastRemoved = "Last Item removed"+ menu.found[itemIndex].name;
        menu.found.splice(itemIndex,1);
    };

}
MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
    var service = this;
    service.getMatchedMenuItems(searchTerm) = function () {
    return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    }).then(function(response){
        var foundItems = [];
        var menuItemsLength = response.data.menu_items.length;
        for (var i = 0;i<menuItemsLength; i++){
            var item = response.data.menu_items[i];
            if(item.description.indexOf(searchTerm) !== -1){
                foundItems.push(item);
            }
        }
        return foundItems;
    

    })

    
  };
}

})();