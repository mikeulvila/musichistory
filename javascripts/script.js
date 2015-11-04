
define(
	["jquery", "populate-songs", "get-more-songs"],
	function($, populate, getMore) {
		
		$("#enter-song-info").hide();
		
		var mainWindow = $("#song-list-container");
		
		var getSongInfo = function (songInfo) {
			var songs = songInfo.songs;
			for (var i = 0; i < songs.length; i++) {
		    	mainWindow.append("<div id='song-container'><h2>" + songs[i].title + "</h2><ul class='song-info'><li>" + songs[i].artist + " </li><li class='song-info-border'>" + songs[i].album + "</li></ul><button class='delete-button'>Delete</button></div>");
		    }
		};

		populate.getJsonData(getSongInfo);


	// $.ajax({url: "data/songs.json"}).done(getSongInfo); 
//*****************ADD MORE SONGS WITH MORE BUTTON***************************
	$("#more-button").click(function(){
		getMore.getJsonData(getSongInfo);
	});
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

//*************DECLARE VARIABLES******************************
var titles = [],
	artists = [],
	albums = [];

//******************ADD MUSIC************************
	$("#add").click(function() {
		console.log("add button works");
		titles.push($("#song-title").val());
		artists.push($("#song-artist").val());
		albums.push($("#song-album").val());
		console.log(titles);
		console.log(artists);
		console.log(albums);
		mainWindow.append("<div id='song-container'><h2>" + titles[titles.length - 1] + "</h2><ul class='song-info'><li>" + artists[artists.length - 1] + " </li><li class='song-info-border'>" + albums[albums.length - 1] + "</li></ul><button class='delete-button'>Delete</button></div>");
		$("#main-window").show();
		$("#side-nav").show();
		$("#enter-song-info").hide();
		$("#song-title").val("");
		$("#song-artist").val("");
		$("#song-album").val("");
	});

/****************DELETE ROW OF SONGS*********************/
	$(document).on("click", ".delete-button", function(event){
		console.log("delete button works", event);	
		event.target.parentElement.remove();
	});

});
















