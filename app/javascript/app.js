var myAppModule = angular.module('MyApp', [
  'ngRoute',
]);

myAppModule.config(['$routeProvider',
    function($routeProvider) {
	 $routeProvider.
		when('/home', {
			templateUrl: 'app/view/home.html',
			controller: 'TestController'
		}).
		otherwise({
          redirectTo: '/home'
      });
 	}
]);