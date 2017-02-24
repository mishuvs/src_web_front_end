'use strict';

angular.module('src')
        .constant("baseURL","http://localhost:3000/")
        .service('dataFactory', ['$resource','baseURL', function($resource,baseURL) {
    
                this.getProjects = function(){
                                        return $resource(baseURL+"projects/:id",null,  {'update':{method:'PUT' }});
                                    };
    
                this.getGalary = function(id) {
                            return $resource(baseURL+"galary/:id",null,  {'update':{method:'PUT' }});
                    }
    
                        
        }])

;