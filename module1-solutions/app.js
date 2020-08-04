(function () {
    'use strict';
    
    angular.module('LunchCheck', [])
    
    .controller('LunchCheckController', LCController);

    LCController.$inject= ['$scope'];
    function LCController($scope) {
        $scope.num = '';
        $scope.msg= '';

        $scope.checkItems = function (){
            var items= $scope.num.split(',');
            var noofitems= 0;

            for (var i=0;i< items.length; i++){
                if ((items[i] != '') && (items[i] != ' ')) {
                    noofitems++;
                }
            }
            printMessage(noofitems, $scope);
        };
    }

    function printMessage(n, scp) {
            if( n==0 )
                scp.msg= 'Please enter data first'
            else if (n <= 3)
                scp.msg = 'Enjoy!'
            else    
                scp.msg= 'Too much!'
        }
    
    })();
    