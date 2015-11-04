requirejs.config({
	baseUrl: "./javascripts",
	paths:{
		"jquery": "../lib/bower_components/jquery/dist/jquery.min",
		"bootstrap": "../lib/bower_components/bootstrap/dist/js/bootstrap.min"
	},
	shim: {
		'bootstrap': {
			deps: ['jquery'],
			exports: 'bootstrap'
		}
	}
});

require(
	["jquery", "bootstrap", "script", "populate-songs", "get-more-songs"],
	function($, bootstrap, script, populate, getMore) {

	}
);