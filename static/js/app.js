(function(){
	app = angular.module('AsciiWarehouse', ['productGrid','asciiFilters'] );

	app.controller('WarehouseController',['$scope',function($scope){
		$scope.order = 'price';
		
	}]);
		
})();





