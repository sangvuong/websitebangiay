window.User = function ($scope, $http) {
  ($scope.registration = function (event) {
    event.preventDefault();
    var data = {
      id: Math.random().toString,
      username: $scope.form_dangKy.username,
      password: $scope.form_dangKy.password,
      email: $scope.form_dangKy.email,
    };
    $http.post(userAPI, data).then(function (response) {
      alert("success");
    });
  }),
    function (e) {
      alert("false");
    };
};
