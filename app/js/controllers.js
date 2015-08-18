var storyControllers = angular.module('myApp.storyControllers', []);

    storyControllers.controller('StoryListCtrl', ['$scope', 'Stories',function ($scope,Stories) {
        $scope.data={};
        Stories.query(function (response) {
            $scope.data.stories=response;
        })
    }]);
storyControllers.controller('StoryDetailCtrl', ['$scope','$routeParams', 'Story',function ($scope,$routeParams,Story) {
    $scope.data={};
    $scope.data.story=Story.get({   id:$routeParams.storyId});
}]);
