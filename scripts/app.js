var app = angular.module("myApp", ['ui.router']).config(function ($stateProvider,$urlRouterProvider) {
    $stateProvider
        .state('main', {

            url: '/main',
            controller: 'MainCtrl',
            templateUrl: 'views/main.html'
        })
        .state('order', {

            url: '/order',
            controller: 'OrderCtrl',
            templateUrl: 'views/order.html'
        })
        .state('order_status', {

            url: '/order:orderId',
            controller: 'OrderStatusCtrl',
            templateUrl: 'views/order_status.html'
        })
        .state('contact', {

            url: '/contact',
            controller: 'ContactCtrl',
            templateUrl: 'views/contact.html'
        });

    $urlRouterProvider.otherwise('/main');
});
