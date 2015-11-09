// define(
// 	["jquery", "script"],
// 	function($, script) {

// 		$("#add").click(function() {
// 			console.log("add button works");
// 			var inputSong = {
// 				songs: [
// 					{
// 						title: $("#song-title").val(),
// 						artist: $("#song-artist").val(),
// 						album: $("#song-album").val()
// 					}
// 				]
// 			};
			
// 			console.log($("#song-title").val());
// 			console.log("song", inputSong);
// 			require(['hbs!../templates/songs', 'hbs!../templates/artist_select', 'hbs!../templates/album_select'], 
// 				function(songTemplate, artistSelectTemplate, albumSelectTemplate) {
// 				script.mainWindow.append(songTemplate(inputSong));
// 				script.artistSelect.append(artistSelectTemplate(inputSong));
// 				script.albumSelect.append(albumSelectTemplate(inputSong));
// 			});
// 			//***********OLD CODE*******************
// 			// titles.push($("#song-title").val());
// 			// artists.push($("#song-artist").val());
// 			// albums.push($("#song-album").val());
// 			// console.log(titles);
// 			// console.log(artists);
// 			// console.log(albums);
// 			// script.mainWindow.append("<div id='song-container'><h2>" + titles[titles.length - 1] + "</h2><ul class='song-info'><li>" + artists[artists.length - 1] + " </li><li class='song-info-border'>" + albums[albums.length - 1] + "</li></ul><button class='delete-button'>Delete</button></div>");
// 			$("#main-window").show();
// 			$("#side-nav").show();
// 			$("#enter-song-info").hide();
// 			$("#song-title").val("");
// 			$("#song-artist").val("");
// 			$("#song-album").val("");
			
// 	});

// });
