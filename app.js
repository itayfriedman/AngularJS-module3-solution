(function (){
'use strict';

  angular.module('NarrowItDownApp', [])

  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  // .directive('foundItems', FoundItemDirective)

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var items = this;

    var promise = MenuSearchService.getMatchedMenuItems();

    promise.then(function (response) {

      items.founds = response.data.menu_items;
    })
    .catch(function (error) {
      console.log("Someting went worng !");
    });
  }

  MenuSearchService.$inject = ['$http'];
  function MenuSearchService($http) {
    var service = this;

    service.getMatchedMenuItems = function () {
    var response = $http({
      method: "GET",
      url: ("https://davids-restaurant.herokuapp.com/menu_items.json")
    });

    return response;
  };
}

})();
