define(["jquery"], function($) {
	return {
		getJsonData: function(doWorkFunc) {
			$.ajax({url: "https://blazing-torch-7461.firebaseio.com/.json"})
				.done(doWorkFunc); 
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