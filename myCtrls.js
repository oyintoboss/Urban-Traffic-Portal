(function () {
    'use strict';

    angular
        .module('app')
        .controller('myCtrls', myCtrls);

    myCtrls.$inject = ['$location'];

    function myCtrls($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'myCtrls';

        activate();

        function activate() { }
    }
})();
