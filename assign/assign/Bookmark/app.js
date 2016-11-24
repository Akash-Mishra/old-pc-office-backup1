var app = angular.module('Bookmark', []);

app.controller('MainCtrl', [
  '$scope',
  function($scope){
    // $scope.test = 'Hello, World!';

    $scope.links = [
      {title: 'link 1', upvotes: false},
      {title: 'link 2', upvotes: false},
      {title: 'link 3', upvotes: false},
      {title: 'link 4', upvotes: false},
      {title: 'link 5', upvotes: false}
    ];

    $scope.addLink = function(){
      if(!$scope.title || $scope.title === '') { return; }
      $scope.links.push({
        title: $scope.title,
        // link: $scope.link,
        upvotes: false
      });
      $scope.title = '';
      // $scope.link = '';
    };

    $scope.Bookmark = function(link) {
      link.upvotes != link.upvotes;
    };


  }]);
