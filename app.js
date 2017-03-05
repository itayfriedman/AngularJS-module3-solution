(function (){
'use strict';

  angular.module('NarrowItDownApp', [])

  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService);

MenuSearchService.$inject = ['$http']
function MenuSearchService($http) {
  var service = this;

service.getMatchedMenuItems = function(searchTerm) {
  var response  =  $http({
    method: "GET",
    url: (""),
    params: {

    }
  });

  return response;
};

}
})();
