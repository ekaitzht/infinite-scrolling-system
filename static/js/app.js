(function(){
	app = angular.module('AsciiWarehouse', ['asciiFilters']);

	app.controller('GridController',['$scope',function($scope){
		
		$scope.orderPreference = 'size';
		$scope.faces = faces;
	
	
	
		$scope.incrementUpvotes = function(review){
	  	
    	};
	

	}]);

	
		faces = [{"id":"0-rd8at81d3dd0lik9","size":21,"price":729,"face":"( .-. )","date":"Mon Feb 29 2016 00:57:32 GMT+0100 (CET)"},
{"id":"1-svmw4uruvdxcg14i","size":18,"price":59,"face":"( .o.)","date":"Thu Mar 03 2016 21:15:35 GMT+0100 (CET)"},
{"id":"2-l6g092v8w4abrzfr","size":12,"price":94,"face":"( `·´ )","date":"Mon Feb 29 2016 16:12:38 GMT+0100 (CET)"},
{"id":"3-vc1oalompvcayvi","size":19,"price":899,"face":"( ° ͜ ʖ °)","date":"Tue Mar 01 2016 03:34:13 GMT+0100 (CET)"},
{"id":"4-9nnnheac9fcg14i","size":20,"price":41,"face":"( ͡° ͜ʖ ͡°)","date":"Sat Mar 05 2016 23:11:06 GMT+0100 (CET)"},
{"id":"5-1az38onaayz257b9","size":28,"price":816,"face":"( ⚆ _ ⚆ )","date":"Mon Feb 29 2016 05:36:19 GMT+0100 (CET)"},
{"id":"6-tn95j3e9sbtep14i","size":32,"price":666,"face":"( ︶︿︶)","date":"Sun Mar 06 2016 17:44:55 GMT+0100 (CET)"},
{"id":"7-negnyids4jlnxw29","size":14,"price":152,"face":"( ﾟヮﾟ)","date":"Thu Mar 03 2016 23:45:32 GMT+0100 (CET)"},
{"id":"8-6w0r5xew1wd34n29","size":22,"price":235,"face":"(\\/)(°,,,°)(\\/)","date":"Mon Feb 22 2016 14:12:14 GMT+0100 (CET)"},
{"id":"9-r26eca0rbbxd2t9","size":26,"price":859,"face":"(¬_¬)","date":"Sat Mar 05 2016 12:08:15 GMT+0100 (CET)"}];
	
})();





