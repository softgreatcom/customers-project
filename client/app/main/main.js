'use strict';

angular.module('dashboardApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });
  }).component("customersList",{
      controller: function ($scope, $rootScope, $http) {

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
            $rootScope.selectCustomerFunction(customer);
        }

        $scope.selectCustomer = selectCustomer;

      },
      templateUrl: "../../components/customer-list/customer-list.html",
  }).component("customersListContainer",{
      controller: function ($scope, $rootScope, $http) {

        $scope.selectedCustomer = {
        		name: "Tiger Dejesus",
        		email: "congue.elit@enimdiamvel.com",
        		company: "Vel Arcu PC",
        		region: "Nord-Pas-de-Calais",
        		zipCode: "11615",
        		info: "sem. Nulla interdum. Curabitur dictum. Phasellus in felis. Nulla tempor",
        		country: "Tokelau",
        		phone: "(03874) 8192714",
        		city: "Hénin-Beaumont",
        		organisationNumber: "87979648499"
        };

        // First approach inter-component communication
        // using broadcast event
        $rootScope.$on('SelectCustomer', function(event, customer) {
          $scope.selectedCustomer = customer;
        });

        // Second approach inter-component communication
        // using rootScope function
        $rootScope.selectCustomerFunction = function(customer){
          $scope.selectedCustomer = customer;
        };

      },
      templateUrl: "../../components/customer-list-container/customer-list-container.html",
  });
