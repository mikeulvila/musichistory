define(
	["jquery"],
	function($) {
		$("#add").click(function() {
			console.log("click works");
			var newSong = {
				"title": $("#song-title").val(),
				"artist": $("#song-artist").val(),
				"album": $("#song-album").val()
				};
			console.log(newSong);	
			$.ajax({
				url: "https://blazing-torch-7461.firebaseio.com/songs.json",
				method: "POST",
				data: JSON.stringify(newSong)
			}).done(function(){
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