define(["jquery"], function($) {
	return {
		getJsonData: function(doWorkFunc) {
			$.ajax({url: "data/songs.json"})
				.done(doWorkFunc); 
				
  	  	}
	};

});
