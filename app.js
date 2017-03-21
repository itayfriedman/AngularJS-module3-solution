(function (){
'use strict';

  angular.module('NarrowItDownApp', [])

  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .directive('foundItems', FoundItemDirective)

  function FoundItemDirective() {
console.log("FoundItemDirective");
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      items: '<',
      onRemove: '&'
    },
    controller: FoundItemDirectiveController,
    controllerAs: 'list',
    bindToController: true,
  };

  return ddo;
}

function FoundItemDirectiveController() {
  var list = this;

  list.isEmpty = function () {
    return list.found.length ===0;
  }
}

MenuSearchService.$inject = ['$http']
function MenuSearchService($http) {
  var service = this;

service.getMatchedMenuItems = function(searchTerm) {
console.log("getMatchedMenuItems");
  return  $http({
    method: "GET",
    url: ("https://davids-restaurant.herokuapp.com/menu_items.json")
  }).then(function(response) {
    var foundItems = response.data;
    console.log("foundItems  ", foundItems);
    
  });
  }


  // return $http(...).then(function (result) {
  //     // process result and only keep items that match
  //     var foundItems...
  //
  //     // return processed items
  //     return foundItems;
  // });
};

}
})();
