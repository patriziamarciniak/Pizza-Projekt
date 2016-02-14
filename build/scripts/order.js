angular.module("myApp").controller("OrderCtrl", function($scope,$http,Order) {

    $scope.order =  Order.returnorder();
    $scope.price=Order.returnprice();
    $scope.client = {
        remarks: 'Twoje uwagi'
    };


    $scope.add_order = function(clientObj){

        $scope.client=clientObj;
        console.log($scope.client)

        $scope.finalorder=[];

        for (var i=0; i<$scope.order;i++){
            $scope.finalorder.push({
                pizza:{
                    id: $scope.order[i].id
                },
                quantity: $scope.order[i].quantity
            })
        }

        $http.post('/order',$scope.finalorder)
                .success(function(response){
                console.log(response);
                $state.go('order_status', {
                });
            })
            .error(function(response){
                console.log("Error" + response);
            })
    };

});