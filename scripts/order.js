angular.module("myApp").controller("OrderCtrl", function($scope,$http,Order,$state) {

    $scope.order =  Order.returnorder();
    $scope.price=Order.returnprice();
    $scope.client = {};


    $scope.add_order = function(clientObj){

        $scope.client=clientObj;

        $scope.finalorder={
            order: [],
            orderInfo: {
                telefon: $scope.client.phone,
                street: $scope.client.street,
                housenr: $scope.client.house,
                remarks: $scope.client.remarks
            },
            extras: []
        };

        for (var i=0; i<$scope.order.length ;i++){
            $scope.finalorder.order.push({
                id: $scope.order[i].id,
                quantity: $scope.order[i].quantity
            })
        }


        $http.post('/order', ($scope.finalorder))
            .success(function(response){
                $scope.parsedRes = JSON.parse(response.id);
                $state.go('order_status',{orderId:$scope.parsedRes });
            }).error(function(response){
                console.log("Error" + response);
            })

    };

});