define(["q", "jquery"], function(Q, $) {
  return function(songKey) {
    var deferred = Q.defer();

    $.ajax({ 
            url: "https://blazing-torch-7461.firebaseio.com/songs/" + songKey + "/.json",
            method: "DELETE"
    }).done(function(json_data) {
        // Now we can resolve the promise and send the data
        deferred.resolve(json_data);
        console.log(json_data);
      })
      // XHR failed for some reason
      .fail(function(xhr, status, error) {
        // Since the call failed, we have to reject the promise
        deferred.reject(error);
        console.log("error", error);
      });

    return deferred.promise;
  }; //--end return  
}); //--end define