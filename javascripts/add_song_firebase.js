define(
	["jquery", "add_song_promise"],
	function($, addPromise) {
		$("#add").click(function() {
			console.log("click works");
			var newSong = {
				"title": $("#song-title").val(),
				"artist": $("#song-artist").val(),
				"album": $("#song-album").val()
				};
			console.log(newSong);	
			addPromise(newSong)
			.then( function() {
				// populate.getJsonData(script.getSongInfo);
				$("#main-window").show();
				$("#side-nav").show();
				$("#enter-song-info").hide();
				$("#song-title").val("");
				$("#song-artist").val("");
				$("#song-album").val("");
			});
		});
});