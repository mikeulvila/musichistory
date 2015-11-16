define(
	["jquery", "add_song_promise"],
	function($, addPromise) {
		//***********ADD SONG USING ADD SONG PROMISE**********
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
				$("#main-window").show();
				$("#side-nav").show();
				$("#enter-song-info").hide();
				$("#song-title").val("");
				$("#song-artist").val("");
				$("#song-album").val("");
			})
			.fail(function(error) {
				alert(error);
			});
		});
});