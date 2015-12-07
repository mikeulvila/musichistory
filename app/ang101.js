var app = angular.module("musichistory", ["ngRoute", "firebase", "angular.filter"]);

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


