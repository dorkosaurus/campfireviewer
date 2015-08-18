var storyServices = angular.module('myApp.services', ['ngResource']);

storyServices.factory('Stories', function($resource){
        return $resource('http://localhost:8080/stories', {})
    });

storyServices.factory('Story',function($resource){
        return $resource('http://localhost:8080/stories/:id', {id:'@id'})
    });
storyServices.value('version', '0.1');
