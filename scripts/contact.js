angular.module("myApp").controller("ContactCtrl", function($scope,$http) {

    $http.get('/contact')
        .success(function(response){
            $scope.contact=response;
            console.log(response);
        })
        .error(function(response){
            console.log("Error" + response);
        })


});