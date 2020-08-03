(function() {
    'use strict';

    angular.module('myFirstApp',[] )

    .controller('MyFirstController', function ($scope){
        $scope.name="Ajay Kumar";
        $scope.sayHello= function () {
            return "Hello Everyone!"
        }
    });

})();