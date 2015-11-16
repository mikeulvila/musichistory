define(["jquery", "delete_song_promise"], function($, deleteSongPromise) {

/****************DELETE SONG FROM FIREBASE USING DELETE SONG PROMISE*********************/
	$(document).on("click", ".delete-button", function(event){
		console.log("delete button works", event);	
		event.target.parentElement.remove();
		var songKey = $(this).attr("id");
		//delete promise *****************
		deleteSongPromise(songKey)
		.then(function() {
			alert("Song Deleted");
		})
		.fail(function(error){
			alert(error);
		}); //--end deletePromise
	}); // --end click function
}); // --end define
