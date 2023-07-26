var myApp = angular.module("myModule", ["ngRoute"]);
myApp.config(function ($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix("");
  $routeProvider
    .when("/trang-chu", {
      templateUrl: "./pages/trang-chu.html",
      controller: HienThiGiay,
    })
    .when("/san-pham", {
      templateUrl: "./pages/san-pham.html",
      controller: HienThiGiay,
    })
    .when("/gioi-thieu", {
      templateUrl: "./pages/gioi-thieu.html",
    })
    .when("/tin-tuc", {
      templateUrl: "./pages/tin-tuc.html",
    })
    .when("/san-pham/detail-sp-moi/:id", {
      templateUrl: "./pages/detail-sp-moi.html",
      controller: HienThiGiay,
    })
    .when("/lien-he", {
      templateUrl: "./pages/lien-he.html",
    })
    .when("/sp-da-mua", {
      templateUrl: "./pages/sp-da-mua.html",
      controller: HienThiGiay,
    })
    .when("/dangky-dangnhap", {
      templateUrl: "./pages/dangky-dangnhap.html",
      controller: User,
    })
    .when("/quen-mat-khau", {
      templateUrl: "./pages/quen-mat-khau.html",
    })
    .when("/gio-hang", {
      templateUrl: "./pages/gio-hang.html",
      controller: HienThiGiay,
    })
    .otherwise({
      redirectTo: "/trang-chu",
    });
});
