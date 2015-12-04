var app = angular.module("musichistory", ["ngRoute"]);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/songs/list', {
        templateUrl: 'partials/song-list.html',
        controller: 'musicctrl'
      }).
      when('/songs/add', {
        templateUrl: 'partials/addSong.html',
        controller: 'songFormCtrl'
      }).
      otherwise('/songs/list');
  }]);













  // var JSON1 = $http.get("data/songs.json");
  // var JSON2 = $http.get("data/more-songs.json");
  // $q.all([JSON1, JSON2]).then(function(obj) {
  //   console.log("angular songs", obj);
  //   $scope.combined = [];
  //   angular.forEach(obj, function(song) {
  //     $scope.combined.push(song);
  //   });

  //   console.log("angular combined array", $scope.combined);
  // })
