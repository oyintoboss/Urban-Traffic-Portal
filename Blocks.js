﻿(function () {
    'use strict';

    angular
        .module('app',[])
        .controller('Blocks', Blocks);

    Blocks.$inject = ['$location'];

    function Blocks($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'Blocks';

        activate();

        function activate() {
            $location.reports = [
                {
                    location: 'Mainland Bridge',
                    Date: '25-03-18',
                    Time: '6:45am to 2pm',
                    Description: 'Total Closure'

                },
                {
                    location: 'Alaka Road',
                    Date: '16-04-18',
                    Time: '05:00am to 07:30am',
                    Description: 'Service Lane'

                },
                {
                    location: 'Anthony BusStop',
                    Date: '16-04-18',
                    Time: '06:00am to 08:30am',
                    Description: 'Charley Boy Bus Stop to Oworonsoki'

                }
            ];
        }
    }
})();
