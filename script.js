
$(document).ready(function() {

var mainWindow = $("#main-window");
	$.ajax({
	    url: "data/songs.json"
	  	}).done(function(jsonObj) {
	    // When you tell jQuery to read a file via the ajax method
	    // it reads the contents, and then executes whatever function
	    // that you specify here in the done() method, and passes in
	    // the contents of the file as the first argument.
	    console.log("the contents of songs.json");
	    console.log(jsonObj);
	    var songs = jsonObj.songs;
	    console.log(songs);
	    for (var i = 0; i < songs.length; i++) {
	    	mainWindow.append("<div id='song-container'><h2>" + songs[i].title + "</h2><ul class='song-info'><li>" + songs[i].artist + "</li><li class='song-info-border'>" + songs[i].album + "</li></ul></div>");
	    };
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

// songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
// songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
// songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
// songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
// songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";
// songs.push("Something > by The Beatles on the album Abbey Road");
// songs.unshift("P.Y.T. > by Michael Jackson on the album Thriller");

//  REMOVE BAD CHARACTERS
// for (var i = 0; i < songs.length; i++) {
// 	songs[i] = songs[i].replace("*", "");
// 	songs[i] = songs[i].replace("@", "");
// 	songs[i] = songs[i].replace("(", "");
// 	songs[i] = songs[i].replace("!", "");
// 	songs[i] = songs[i].replace(">", "-");
// }
// console.log(songs);

// SEPERATE STRINGS TO TITLE, ARTIST, ALBUM

// for (var i = 0; i < songs.length; i++) {
// 	titles.push(songs[i].slice(0, songs[i].indexOf("-") -1));
// 	artists.push(songs[i].slice(songs[i].indexOf("by") + 3, songs[i].indexOf(" on ")));
// 	albums.push(songs[i].slice(songs[i].indexOf("album") + 6))
// }	

// console.log("titles", titles);
// console.log("artists", artists);
// console.log("albums", albums);

// var outputToDiv = "";

// for (var i = 0; i < titles.length; i++) {
// 	outputToDiv += "<p>{" + titles[i] + "} by {" + artists[i] + "} on the album {" + albums[i] + "}</p>";
//     }

// mainWindow.html(outputToDiv);

//******************ADD MUSIC************************
$("#add").click(function() {
	console.log("add button works");
	titles.push($("#song-title").val());
	artists.push($("#song-artist").val());
	albums.push($("#song-album").val());
	console.log(titles);
	console.log(artists);
	console.log(albums);
	mainWindow.append("<div id='song-container'><h2>" + titles[titles.length - 1] + "</h2><ul class='song-info'><li>" + artists[artists.length - 1] + "</li><li class='song-info-border'>" + albums[albums.length - 1] + "</li></ul></div>");
	$("#main-window").show();
	$("#side-nav").show();
	$("#enter-song-info").hide();
	$("#song-title").val("");
	$("#song-artist").val("");
	$("#song-album").val("");
})
});
