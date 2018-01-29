'use strict';

angular.module('dashboardApp')
  .controller('CustomerListCtrl', function ($scope, $rootScope, $http) {

    $scope.customers = [];

    $http.get('/api/customers').then(function(customers) {
      $scope.customers = customers.data;
    });

    function selectCustomer(customer) {

        // First approach inter-component communication
        // using broadcast event
        $rootScope.$broadcast('SelectCustomer', customer);

        // Second approach inter-component communication
        // using rootScope function
        $scope.selectCustomerFunction(customer);
    }

    $scope.selectCustomer = selectCustomer;

  });
