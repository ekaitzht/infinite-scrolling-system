angular.module('productGrid',[])
.directive('productGrid', ['Faces', function(Faces){
	return {
		restrict: 'E',
		scope: {
			order: '='
			
		},
		replace:true,
		templateUrl:'/js/directives/product-grid.html',
		link: function (scope, element) {
           
			$(window).on("scroll",function() {
				if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
					if(Faces.nextBatch === null){
						scope.loading = true;
						Faces.getBatch().success(function(data){
							scope.loading = false;
							scope.orderPreference = scope.order;
							$.merge(scope.faces,data);
						}).catch(function(err){
							
						});
					} else {
						scope.faces = nextBatch;
					}
			
			   }
			});
			
        },
		
		controller:['$scope',function($scope){
				Faces.getBatch().success(function(data){
					$scope.orderPreference = $scope.order;
					$scope.faces = data;	
				}).catch(function(err){
					
				});
			
		}]
	};
}]);




