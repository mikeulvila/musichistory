define(["jquery"], function($) {
	return {
		getJsonData: function(doWorkFunc) {
			$.ajax({url: "data/songs.json"})
				.done(function(jsonPopulateData) {
					doWorkFunc(jsonPopulateData);
				});
  	  	}
	};

});



// function add(a, b) {
// 	return a + b
// }

// add(1,2)

// function math(a, b, functionName) {
// 	functionName(a, b);
// }

// math(1, 2, add;