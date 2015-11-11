define(["lodash"],
	function(_) {

		return {
			getUniqueArtists: function(dataArray) {
				var uniqueArtists = _.chain(dataArray)
									.uniq("artist")
									.pluck("artist")
									.value();
				console.log("unique-artists", uniqueArtists);
				return uniqueArtists;
			},
			getUniqueAlbums: function(dataArray) {
				var uniqueAlbums = _.chain(dataArray)
									.uniq("album")
									.pluck("album")
									.value();
				console.log("unique-albums", uniqueAlbums);
				return uniqueAlbums;
			}
		};
		// var matchedAlbums = _.chain(config.originalSongsArray)
		// 					.filter((song) => song.artist === selectedArtist)
		// 					.uniq(‘album.name’).pluck(‘album’).value();

});