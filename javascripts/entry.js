requirejs.config({
	baseUrl: "./javascripts",
	paths:{
		"jquery": "../lib/bower_components/jquery/dist/jquery.min",
		"lodash": "../lib/bower_components/lodash/lodash.min",
		"firebase": "../lib/bower_components/firebase/firebase",
		"hbs": "../lib/bower_components/require-handlebars-plugin/hbs",
		"bootstrap": "../lib/bower_components/bootstrap/dist/js/bootstrap.min",
		"q": "../lib/bower_components/q/q"
	},
	shim: {
		'bootstrap': {
			deps: ['jquery'],
			exports: 'bootstrap'
		},
		"firebase": {
  			exports: "Firebase"
		}
	}
});

require(
	["bootstrap", "script", "add_song_firebase", "filter", "delete_button", "populate-songs"],
	function(bootstrap, script, addFirebase, filter, deleteButton, populateSongs) {
		console.log("script111", script);
	}
);