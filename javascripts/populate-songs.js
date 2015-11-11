define(["jquery"], function($) {
	return {
		getJsonData: function(doWorkFunc) {
			$.ajax({url: "https://blazing-torch-7461.firebaseio.com/.json"})
				.done(doWorkFunc); 
  	  	}
	};
});

