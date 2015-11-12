define(
	["jquery", "hbs", "get-more-songs", "unique_artists_albums"],
	function($, hbs, getMore, uniqueModule) {
		
		$("#enter-song-info").hide();
	//**********DECLARE VARIABLES TO RETURN AT END OF PAGE**********
		var mainWindow = $("#song-list-container");
		var artistSelect = $("#artist-select");
		var albumSelect = $("#album-select");
		console.log("mainWindow", mainWindow);
	//********** USE HANDLEBARS TEMPLATES TO POPULATE DOM WITH INFO FROM JSON************
		// var getSongInfo = function (songInfo) {
		// 	//***************TURN JSON OBJECT TO ARRAY OF SONG OBJECTS**********
		// 	var dataArray = $.map(songInfo.songs, function(e) { 
		// 		return e;
		// 	});
		// 	console.log("dataArray", dataArray);
		// 	//***************MAKE NO DUPLICATE ARTIST AND ALBUM USING UNIQUE MODULE***********
		// 	var uniqueArtists = uniqueModule.getUniqueArtists(dataArray);
		// 	var uniqueAlbums = uniqueModule.getUniqueAlbums(dataArray);
		// 	//************ INSERT INTO MAIN WINDOW AND DROP DOWN MENUS ***********************
		// 	require(['hbs!../templates/songs', 'hbs!../templates/artist_select', 'hbs!../templates/album_select'], 
		// 		function(songTemplate, artistSelectTemplate, albumSelectTemplate) {
		// 		mainWindow.html(songTemplate(songInfo));
		// 		artistSelect.html(artistSelectTemplate(uniqueArtists));
		// 		albumSelect.html(albumSelectTemplate(uniqueAlbums));
		// 	});

		// };//--end getSongInfo function

	//************CALL JSON REQUEST AND INSERT getSongInfo as CALLBACK**********
		// populate.getJsonData(getSongInfo);

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
		// getSongInfo: getSongInfo
	};


});