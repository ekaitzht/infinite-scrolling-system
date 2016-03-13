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
           
           
           	var scrollFunction = function() {
				if(($(window).scrollTop() + $(window).height() > $(document).height() - 100)) {
							$(this).off('scroll',scrollFunction);
							scope.loading = true;
							if(scope.dataCached === null){
								Faces.getBatch().success(function(data){
									scope.loading = false;
									$.merge(scope.faces,data);
									$(this).on('scroll',scrollFunction);
								}).catch(function(err){
									
									
								});
								
							} else {
								scope.loading = false;
								$.merge(scope.faces,scope.dataCached);
							    scope.dataCached = null;
							    $(this).on('scroll',scrollFunction);

							}

			   }
			}
			
			$(window).on("scroll",scrollFunction);
			
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




