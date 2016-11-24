'use strict';

angular.module('d3App')
.config(['$stateProvider','$urlRouterProvider',
function config($stateProvider,$urlRouterProvider){

  $urlRouterProvider.otherwise('/Home/homeContent');

  $stateProvider
      .state('Home',{
            url: '/Home',

            template: '<home-view></home-view>'
      })

      .state('Home.homeContent',{
            url: '/homeContent',
            //sticky: true,
            //deepStateRedirect: true,
            views : {
                       'myHead':{
                                  template: '<my-headview></my-headview>'
                       },
                       'myBody':{
                                  template: '<my-bodyview></my-bodyview>'
                       }
            }
      })

      .state('Home.homeContent.phoneContentView',{
           sticky: true,
           url: '/:phValue',
           views : {
                    "content" : {
                                  template: '<phn-content-view></phn-content-view>'
                                }
                  }

      })

      .state('Home.homeContent.phoneContentView.addWin',{
          
          views: {
                   "addWinView" : {
                                    template: '<win-view></win-view>'
                                  }
                  }
      })
}]);
