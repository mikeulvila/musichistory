define(["jquery", "hbs", "firebase", "script", "unique_artists_albums"], 
	function($, hbs, firebase, script, uniqueModule) {

	// Create a reference to your Firebase database
	var myFirebaseRef = new Firebase("https://blazing-torch-7461.firebaseio.com");
	// Listen for when anything changes on the "songs" key
	myFirebaseRef.child("songs").on("value", function(snapshot) {
		// Store the entire songs key in a local variable (object of objects)
		var allSongsObject = snapshot.val();
		console.log("allSongsObject", allSongsObject);
		// Create Array of objects
		var dataArray = $.map(allSongsObject, function(e) { 
				return e;
 			});
		console.log("dataArray", dataArray);
		//***************MAKE NO DUPLICATE ARTIST AND ALBUM USING UNIQUE MODULE***********
 			var uniqueArtists = uniqueModule.getUniqueArtists(dataArray);
 			console.log("uniqueArtists", uniqueArtists);

 			var uniqueAlbums = uniqueModule.getUniqueAlbums(dataArray);
 			console.log("uniqueAlbums", uniqueAlbums);
 			//************ INSERT INTO MAIN WINDOW AND DROP DOWN MENUS ***********************
			require(['hbs!../templates/songs', 'hbs!../templates/artist_select', 'hbs!../templates/album_select'], 
				function(songTemplate, artistSelectTemplate, albumSelectTemplate) {
		// Bind the allSongsObject to the song list Handlebar template
				script.mainWindow.html(songTemplate({songs:allSongsObject}));

  		// Bind the unique artists to the artists template
				script.artistSelect.html(artistSelectTemplate(uniqueArtists));

  		// Bind the unique albums to the albums template
				script.albumSelect.html(albumSelectTemplate(uniqueAlbums));
			});//--end require templates

	}); // --end snapshot function
	 
});//--end define


// var dataArray = $.map(songInfo.songs, function(e) { 
// 				return e;
// 			});
// 			console.log("dataArray", dataArray);
// 			//***************MAKE NO DUPLICATE ARTIST AND ALBUM USING UNIQUE MODULE***********
// 			var uniqueArtists = uniqueModule.getUniqueArtists(dataArray);
// 			var uniqueAlbums = uniqueModule.getUniqueAlbums(dataArray);
// 			//************ INSERT INTO MAIN WINDOW AND DROP DOWN MENUS ***********************
// 			require(['hbs!../templates/songs', 'hbs!../templates/artist_select', 'hbs!../templates/album_select'], 
// 				function(songTemplate, artistSelectTemplate, albumSelectTemplate) {
// 				mainWindow.html(songTemplate(songInfo));
// 				artistSelect.html(artistSelectTemplate(uniqueArtists));
// 				albumSelect.html(albumSelectTemplate(uniqueAlbums));
// 			});



	//return {
	// 	getJsonData: function(doWorkFunc) {
	// 		$.ajax({url: "https://blazing-torch-7461.firebaseio.com/.json"})
	// 			.done(doWorkFunc); 
 	//  	  	}
	// };