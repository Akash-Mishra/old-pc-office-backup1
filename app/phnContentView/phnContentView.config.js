'use strict';
angular.module('phnContentView')
.component('phnContentView',{
  templateUrl: 'phnContentView/phnContentView.template.html',
  controller: ['$http','$stateParams',
                function phnContentViewController($http,$stateParams){
                  var self = this;

                  $http.get('gadgets/'+ $stateParams.phValue +'.json').then(function(response){

                    self.phoneContent = response.data;
                  //  console.log(self.phoneContent.name);
                  });
                }
              ]
});
