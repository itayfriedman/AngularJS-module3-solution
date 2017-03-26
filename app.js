(function (){
'use strict';

  angular.module('NarrowItDownApp', [])

  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .directive('foundItems', FoundItemDirective)

  function FoundItemDirective() {

    var ddo = {
      templateUrl: 'foundItems.html',
      scope: {
        found: '<',
        onRemove: '&'
      },
      controller: FoundItemDirectiveController,
      controllerAs: 'items',
      bindToController: true,
    };

    return ddo;
  }

  function FoundItemDirectiveController() {
    var found = this;
    if (found.length = 0 ) {
      return true;
    }

  }

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var items = this;
    items.searchItem = "";

  items.nerrowIt = function () {
    if (items.searchItem === ""){
      items.founds =[];
      return;
    }

    var promise = MenuSearchService.getMatchedMenuItems(items.searchItem);
    promise.then(function (response) {
      items.founds = response;
    })
    .catch(function (error) {
      console.log("Someting went worng !");
    });
  }

  }

  MenuSearchService.$inject = ['$http'];
  function MenuSearchService($http) {
    var service = this;

    service.getMatchedMenuItems = function (searchItem) {
    return $http({
      method: "GET",
      url: ("https://davids-restaurant.herokuapp.com/menu_items.json")
    }).then(function (result) {

      var items = result.data.menu_items;
      var foundItems = [];
      // var searchItem = "Egg";

            for (var i = 0; i < items.length; i++) {
              if (items[i].description.toLowerCase().indexOf(searchItem.toLowerCase()) >=0 ){

                foundItems.push(items[i]);
              }
            }
            // return processed items
      return foundItems;

    })
  };
}

})();
