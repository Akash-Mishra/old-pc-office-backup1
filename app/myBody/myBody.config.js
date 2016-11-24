'use Strict';

angular.module('myBodyview')
.component('myBodyview',{
  templateUrl: 'myBody/myBody.template.html',
  controller: ['$http','$scope','$state',function companyListController($http,$scope,$state){
    var self = this;
    $http.get('gadgets/company.json').then(function(response){
      self.company = response.data;
    });

    $http.get('gadgets/Nokia.phones.json').then(function(response){
      self.phone = response.data;
    });

    $scope.change = function(evt){
      $http.get('gadgets/'+evt+'.phones.json').then(function(response){
        self.phone = response.data;
      });

      $scope.bread = evt ;
    };

    $scope.init = function(name,value){
      $scope.breCru(name);
      $state.go('Home.homeContent.phoneContentView',{phName:name,phValue:value});
      // console.log('hello');
    };

    $scope.breCru = function(data){
     var a = angular.element( document.querySelector( '.breadCrumbLabel' ) );;
     a.text(" ");
     a.append($scope.bread+"&nbsp;- "+data);

    };

  }]
});
