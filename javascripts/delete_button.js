define(["jquery"], function($) {

/****************DELETE ROW OF SONGS*********************/
	$(document).on("click", ".delete-button", function(event){
		console.log("delete button works", event);	
		event.target.parentElement.remove();
		var songKey = $(this).attr("id");
		$.ajax({
  			url: "https://blazing-torch-7461.firebaseio.com/songs/" + songKey + "/.json",
  			method: "DELETE"
			}).done(function() {
  			alert("Song Deleted");
  			}); //end .done
		}); // end click function
	}); // end define
