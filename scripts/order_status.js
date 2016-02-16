angular.module("myApp").controller("OrderStatusCtrl", function($scope,$stateParams,$http,Order) {

    $scope.orderId = $stateParams.orderId;
    $http.get('/order/' + $scope.orderId )
        .success(function(response){
            $scope.orderRes=response;
            console.log(response);
        })
        .error(function(response){
            console.log("Error" + response);
        });



});