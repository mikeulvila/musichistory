define(
	["jquery", "hbs", "unique_artists_albums"],
	function($, hbs, uniqueModule) {
		
		$("#enter-song-info").hide();
	//**********DECLARE VARIABLES TO RETURN AT END OF PAGE**********
		var mainWindow = $("#song-list-container");
		var artistSelect = $("#artist-select");
		var albumSelect = $("#album-select");
		console.log("mainWindow", mainWindow);

//***************DISPLAY AND HIDE LIST MUSIC AND ADD MUSIC********************
		$("#list-music").click(function(){
			$("#main-window").show();
			$("#side-nav").show();	
			$("#enter-song-info").hide();
		console.log("list music works");
		});

		$("#add-music").click(function() {
			$("#main-window").hide();
			$("#side-nav").hide();	
			$("#enter-song-info").show();
		console.log("add music works");
		});

	//*********RETURN DOM VARIABLES
	return {
		mainWindow: mainWindow,
		artistSelect: artistSelect,
		albumSelect: albumSelect,
	};
});