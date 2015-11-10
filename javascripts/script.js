
define(
	["jquery", "hbs", "populate-songs", "get-more-songs"],
	function($, hbs, populate, getMore) {
		
		$("#enter-song-info").hide();
	//**********DECLARE VARIABLES TO RETURN AT END OF PAGE**********
		var mainWindow = $("#song-list-container");
		var artistSelect = $("#artist-select");
		var albumSelect = $("#album-select");
	//********** USE HANDLEBARS TEMPLATES TO POPULATE DOM WITH INFO FROM JSON************
		var getSongInfo = function (songInfo) {
			require(['hbs!../templates/songs', 'hbs!../templates/artist_select', 'hbs!../templates/album_select'], 
				function(songTemplate, artistSelectTemplate, albumSelectTemplate) {
				mainWindow.html(songTemplate(songInfo));
				artistSelect.html(artistSelectTemplate(songInfo));
				albumSelect.html(albumSelectTemplate(songInfo));

			});
		};
	//************CALL JSON REQUEST AND INSERT getSongInfo as CALLBACK**********
		populate.getJsonData(getSongInfo);

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

/****************DELETE ROW OF SONGS*********************/
	$(document).on("click", ".delete-button", function(event){
		console.log("delete button works", event);	
		event.target.parentElement.remove();
	});

	//*********RETURN DOM VARIABLES
	return {
		mainWindow: mainWindow,
		artistSelect: artistSelect,
		albumSelect: albumSelect,
		getSongInfo: getSongInfo
	};


});
















