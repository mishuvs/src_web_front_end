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

;