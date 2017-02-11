'use strict';

angular.module('src', ['ui.router'])
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
                }

            })
        
            .state('app.projects', {
                url:'projects',
                views: {
                    'content@': {
                        templateUrl : 'views/projects.html'    
                    }
                }
            })
        
            // route for the contactus page
            .state('app.contactus', {
                url:'contactus',
                views: {
                    'content@': {
                        templateUrl : 'views/contact_us.html'
                    }
                }
            })

            // route for the menu page
            .state('app.galary', {
                url: 'galary',
                views: {
                    'content@': {
                        templateUrl : 'views/galary.html'
                    }
                }
            })

            // route for the dishdetail page
            .state('app.team', {
                url: 'team',
                views: {
                    'content@': {
                        templateUrl : 'views/team.html'
                   }
                }
            });
    
        $urlRouterProvider.otherwise('/');
    })
;