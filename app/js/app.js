'use strict';

angular.module('src', ['ui.router', 'uiRouterStyles'])
.config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
        
            // route for the home page
            .state('app', {
                url:'/',
                views: {
                    'header': {
                        templateUrl : 'views/header.html',
                    },
                    'content': {
                        templateUrl : 'views/aboutus.html'
                    },
                    'footer': {
                        templateUrl : 'views/footer.html',
                    }
                },            
            data: {
                css: ['styles/animate.css', 'styles/style.css', 'styles/style2.css', 'styles/photoswipe/default-skin.css']
            }

            })
        
            .state('app.projects', {
                url:'projects',
                views: {
                    'content@': {
                        templateUrl : 'views/projects.html'    
                    }
                },
            data: {
                css: ['styles/animate.css', 'styles/style2.css','styles/projects.css']
            }
            })
        
            // route for the contactus page
            .state('app.contactus', {
                url:'contactus',
                views: {
                    'content@': {
                        templateUrl : 'views/contact_us.html',
                        controller : 'ContactController'
                    }
                },
            data: {
                css: ['styles/bootstrap-theme.min.css', 'styles/mystyles.css']
            }
            })

            // route for the menu page
            .state('app.galary', {
                url: 'galary',
                views: {
                    'content@': {
                        templateUrl : 'views/galary.html'
                    }
                },
            data: {
                css: ['styles/animate.css', 'styles/style2.css', 'styles/photoswipe.css', 'styles/photoswipe/default-skin.css','styles/galary.css']
            }
            })

            // route for the dishdetail page
            .state('app.team', {
                url: 'team',
                views: {
                    'content@': {
                        templateUrl : 'views/team.html'
                   }
                },
            data: {
                css: ['styles/ihover.min.css','styles/animate.css', 'css/style2.css']
            }
            });
    
        $urlRouterProvider.otherwise('/');
    })

.controller('ContactController', function($scope) {
      
       $scope.initialize = function() {
          var uluru = {lat: 22.725431, lng: 75.873073};
          var map = new google.maps.Map(document.getElementById('map'), {
             center: uluru,
             zoom: 10
          });
          var marker = new google.maps.Marker({
            position: uluru,
            map: map
          });           
       }    
       //code that corrected the map
       google.maps.event.addDomListener(window, 'load', $scope.initialize);
    //code that corrected the map in the controller code
    });