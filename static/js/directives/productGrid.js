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
				if(($(window).scrollTop() + $(window).height() > $(document).height() - 100)) {
								$.merge(scope.faces,scope.dataCached);
							
							scope.$apply();
							scope.$apply(function () {
						      	scope.dataCached = null;
						    });
							
					
			
			   }
			});
			
        },
		
		controller:['$scope',function($scope){
			
				Faces.getBatch().success(function(data){
					$scope.orderPreference = $scope.order;
					$scope.faces = data;
				}).catch(function(err){
					
					
				});
			
				$scope.dataCached = null;

			    $scope.$watch('dataCached', function() {
					if($scope.dataCached === null) {
						Faces.getBatch().success(function(data){
							$scope.dataCached = data;
						}).catch(function(err){
							
							
						});
					}
			    });
			    
				
			
		}]
	};
}]);




