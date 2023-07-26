var myApp = angular.module("myModule", ["ngRoute"]);
myApp.config(function ($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix("");
  $routeProvider
    .when("/quan-ly-sp", {
      templateUrl: "./pages/quan-ly-sp.html",
      controller: HienThiGiay,
    })
    .when("/quan-ly-category", {
      templateUrl: "./pages/quan-ly-category.html",
      controller: HienThiGiay,
    })
    .otherwise({
      redirectTo: "/quan-ly-sp",
    });
});
