'use strict';

angular.module('winView')
.component('winView',{
  templateUrl: 'winView/winView.template.html',
  controller: ['$scope',function($scope){

                var UploadController = function ($scope, fileReader) {
                console.log(fileReader)
                $scope.getFile = function () {
                $scope.progress = 0;
                fileReader.readAsDataUrl($scope.file, $scope)
                           .then(function(result) {
                               $scope.imageSrc = result;
                           });
                };

                $scope.$on("fileProgress", function(e, progress) {
                $scope.progress = progress.loaded / progress.total;
                });

                };

                angular.module('d3App').directive("ngFileSelect",function(){

                return {
                link: function($scope,el){

                el.bind("change", function(e){

                $scope.file = (e.srcElement || e.target).files[0];
                $scope.getFile();
                })

                }

                }


                })


          }]
});
