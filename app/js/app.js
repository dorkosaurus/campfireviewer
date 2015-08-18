'use strict';

// Declare app level module which depends on views, and components
var storyApp = angular.module('storyApp', ['myApp.services','ngRoute','myApp.storyControllers']);

storyApp.config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.
                when('/stories', {
                    templateUrl: 'partials/story-list.html',
                    controller: 'StoryListCtrl'
                 })
                .when('/stories/:storyId', {
                templateUrl: 'partials/story-detail.html',
                controller: 'StoryDetailCtrl'
                })
                .otherwise({
                    redirectTo: '/stories'
                });
        }]);
