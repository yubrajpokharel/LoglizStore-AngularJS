/**
 * Created by yubraj on 6/22/16.
 */

var app = angular.module('logliz',['ngRoute']);

app.config(function($routeProvider){

    $routeProvider
        .when('/',{
            templateUrl: 'views/home.html'
        })
        .when('/about',{
            templateUrl: 'view/about.html',
            controller:'aboutController'
        });


});

app.controller('aboutController', ['$scope', '$http', function($scope, $http){
    $http.get("http://www.yubrajpokharel.com/tempstuffs/loglis/about.json")
        .success(function(response) {$scope.names = response;});
}]);