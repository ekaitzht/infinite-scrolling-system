angular.module('asciiFilters',[]).
   filter('dateFilter',  function() {
    return function(date) {
	    var today = new Date();
	    var dateItem = new Date(date);
	    var timeDiff = Math.abs(today.getTime() - dateItem.getTime());
		var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
	    
	    if ( diffDays > 7){
			return date;
			
		} else {
			return diffDays + ' days ago';
		}
		 
    };
  });

 
 

  
  
  
