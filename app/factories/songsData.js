app.factory("songsData", ["$firebaseArray", 
	function ($firebaseArray) {
		// create a reference to the database location where we will store our data
		var ref = new Firebase("https://blazing-torch-7461.firebaseio.com/songs");
		// this uses AngularFire to create the synchronized array
    	return $firebaseArray(ref);
	}]); //--end app.factory