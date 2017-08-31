 (function() {
     function config($locationProvider, $stateProvider) {
         $locationProvider
             .html5Mode({
                 enabled: true,
                 requireBase: false
              });

         $stateProvider
             .state('home', {
                 url: '/',
                 controller: 'HomeCtrl as home',
                 templateUrl: '/templates/home.html',
                 scope: {}
             })
     }

     angular
         .module('blocChat', ['ngCookies', 'ui.router', 'firebase', 'ui.bootstrap'])
         .run(['$cookies', BlocChatCookies]);
         .config(config);
 })();
