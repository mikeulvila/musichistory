define(["jquery"], function($) {
	return {
		getJsonData: function(doWorkFunc) {
			$.ajax({url: "data/more-songs.json"})
				.done(function(jsonPopulateData) {
				doWorkFunc(jsonPopulateData);
			});
  	  	}
	};

});