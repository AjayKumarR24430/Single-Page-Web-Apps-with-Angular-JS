(function() {
    'use strict';
  
    angular.module('MenuApp')
      .config(RoutesConfig)
  
    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  
    function RoutesConfig($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/');
  
      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'templates/home.html'
        })
        .state('categories', {
          url: '/categories',
          templateUrl: './templates/categories.template.html',
          controller: 'categoriesController as menuCategories',
          resolve: {
            categories: ['MenuDataService', function(MenuDataService) {
              return MenuDataService.getAllCategories();
            }]
          }
        })
        .state('items', {
          url: '/categories/{categoryShortName}',
          templateUrl: './templates/items.html',
          controller: 'itemsController as menuItems',
          params: {
            categoryShortName: null,
            categoryName: null
            },
          resolve: {
            items: ['$stateParams', 'MenuDataService', function($stateParams, MenuDataService) {
              return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
            }]
          }
        });
    }
  })();