angular.module("myApp").controller("MainCtrl", function($scope,$http,Order) {

    $http.get('/menu')
        .success(function(response){
            $scope.menu=response;
            console.log(response);
        })
        .error(function(response){
            console.log("Error" + response);
        })

    $http.get('/ingredients')
        .success(function(response){
            $scope.ingr=response;
            console.log(response);
        })
        .error(function(response){
            console.log("Error" + response);
        })

    $scope.basket=[];

//    obsługa koszyka

    $scope.add_to_basket = function(pizza){

        var pizzaObj={
            id:pizza.id,
            name: pizza.name,
            price: pizza.price,
            ingredients: pizza.ingredients,
            quantity: pizza.quantity
        }
        $scope.basket.push(pizzaObj)

    };

    $scope.remove_from_basket = function(pizzaObj){

        $scope.basket.splice($scope.basket.indexOf(pizzaObj),1);

    };


    $scope.decrease_number = function (pizzaObj) {

        pizzaObj.quantity>1 ? pizzaObj.quantity=pizzaObj.quantity-1 : $scope.remove_from_basket(pizzaObj);

    };

    $scope.get_price = function(){
        var total = 0;
        for(var i = 0; i < $scope.basket.length; i++){
            var product = $scope.basket[i];
            total += (product.price * product.quantity);
        }
        Order.setprice(total);
        return total;
    };


    $scope.addToServiceOrder= function(){
        for (var i=0; i<$scope.basket.length; i++){
            Order.puttobasket($scope.basket[i]);
        }
        console.log(Order.returnorder())
    }

});