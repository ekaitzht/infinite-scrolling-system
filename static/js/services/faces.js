angular.module('AsciiWarehouse')
.factory('Faces',['$http', function($http){
	return {
		
		nextBatch: null,
		pointer:0,
		getBatch: function(){
			var limit = 2000;
			var http = $http({
					  url: '/api/products?limit='+limit+'&skip='+this.pointer,
					  method: 'GET',
					  transformResponse: [function (data) {
						  	var lines = data.split('\n');
						  	lines.pop();
						  	var dataParsed = "";
						  	var len = lines.length;

						  	
							$.each(lines, function(index, element){
			
								if ( index == len - 1 ){
									dataParsed = "[" + dataParsed + element + "]";
								} else {
									dataParsed = element + "," + dataParsed ;
								}

							});
					      return JSON.parse(dataParsed);
					  }]
					});
					
			this.pointer = this.pointer + 15;
			return http;					
		
		}
	}
}]);





