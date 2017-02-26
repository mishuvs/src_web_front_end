'use strict';

angular.module('src')

        .controller('projectController', ['$scope', 'dataFactory', function($scope, dataFactory) {
        
            $scope.showProjects = false;
            $scope.message = "Loading ...";
                        $scope.projects = dataFactory.getProjects().query(
                function(response) {
                    $scope.projects = response;
                    $scope.showProjects = true;
                },
                function(response) {
                    $scope.message = "Error: "+response.status + " " + response.statusText;
                });
        }])

        .controller('aboutController', ['$scope','dataFactory','$document','$window', function($scope, dataFactory,$document,$window) {
        $document.ready(function() {
        
			$(function(){
			    $(".element").typed({
			        strings: [" Technology", "Codes", "Experiments", "Design", "Robots", "Laughter", "Collaborations", "Mistakes"],
			        loop:true,
			        backDelay:500,
			        typeSpeed: 1,
			    });
			});
        })}
                                       ])

        .controller('footerController', ['$scope','dataFactory', function($scope, dataFactory){
            
        }])

;