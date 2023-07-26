window.HienThiGiay = function ($scope, $http, $routeParams) {
  $scope.listBanChay = [];
  $scope.listSpMoi = [];
  $scope.listSpTuongTu = [];
  $scope.listBrand = [];
  $scope.listGioHang = [];

  $scope.listFilterBrand = [];

  $scope.viTriUpdate = -1;
  $scope.form_sp = {
    id: "",
    img: "",
    name: "",
    price: "",
    quantity: 0,
    brand: "",
  };

  $scope.form_brand = {
    id: "",
    name: "",
  };
  $scope.viTriUpdateBrand = -1;

  $http.get(spMoiAPI).then(function (response) {
    if (response.statusText === "OK") {
      $scope.listSpMoi = response.data;
      $scope.detailSpMoi = $scope.listSpMoi.find(
        (item) => item.id == $routeParams.id
      );
      for (var i = 5; i <= 8; i++) {
        $scope.listSpTuongTu.push($scope.listSpMoi[i]);
      }
      for (var i = 1; i <= 8; i++) {
        $scope.listBanChay.push($scope.listSpMoi[i]);
      }
      $scope.listFilterBrand = $scope.listSpMoi;
    }
  }),
    function (e) {
      console.log(e);
    };

  $http.get(brandAPI).then(function (response) {
    if (response.statusText === "OK") {
      $scope.listBrand = response.data;
    }
  }),
    function (e) {
      console.log(e);
    };

  $scope.detailBrand = function (event, index) {
    event.preventDefault();
    let b = $scope.listBrand[index];
    $scope.form_brand.id = b.id;
    $scope.form_brand.name = b.name;
    $scope.viTriUpdateBrand = index;
  };

  $scope.deleteBrand = function (event, index) {
    event.preventDefault();
    let b = $scope.listBrand[index];
    let api = brandAPI + "/" + b.id;
    $http.delete(api).then(function (response) {
      $scope.listBrand.splice(index, 1);
    });
  };

  $scope.addBrand = function (event) {
    event.preventDefault();
    $http.post(brandAPI, $scope.form_brand).then(function (response) {
      $scope.listBrand.push(response.data);
      alert("Add thanh cong");
    });
  };

  $scope.updateBrand = function (event) {
    event.preventDefault();
    if ($scope.viTriUpdateBrand == -1) {
      alert("Ban chua chon brand can sua");
    }
    let b = $scope.listBrand[$scope.viTriUpdateBrand];
    let api = brandAPI + "/" + b.id;
    $http.put(api, $scope.form_brand).then(function (response) {
      $scope.listBrand[$scope.viTriUpdateBrand] = response.data;
      alert("Update thanh cong");
    });
  };

  $scope.detailSp = function (event, index) {
    event.preventDefault();
    let sp = $scope.listSpMoi[index];
    $scope.form_sp.id = sp.id;
    $scope.form_sp.name = sp.name;
    $scope.form_sp.price = sp.price;
    $scope.form_sp.quantity = sp.quantity;
    $scope.form_sp.brand = sp.brand;
    $scope.viTriUpdate = index;
  };

  $scope.deleteSp = function (event, index) {
    event.preventDefault();
    let sp = $scope.listSpMoi[index];
    let api = spMoiAPI + "/" + sp.id;
    $http.delete(api).then(function (response) {
      $scope.listSpMoi.splice(index, 1);
      alert("Xoa thanh cong");
    });
  };

  $scope.addSp = function (event) {
    event.preventDefault();
    $http.post(spMoiAPI, $scope.form_sp).then(function (response) {
      $scope.listSpMoi.push(response.data);
      alert("Add thanh cong");
    });
  };

  $scope.updateSp = function (event) {
    event.preventDefault();
    if ($scope.viTriUpdate == -1) {
      alert("Ban chua chon san pham can sua");
    }
    let sp = $scope.listSpMoi[$scope.viTriUpdate];
    let api = spMoiAPI + "/" + sp.id;
    $http.put(api, $scope.form_sp).then(function (response) {
      $scope.listSpMoi[$scope.viTriUpdate] = response.data;
      alert("Update thanh cong");
    });
  };

  $scope.filterBrand = function (index) {
    $scope.listFilterBrand = [];
    if (index == -1) {
      $scope.listFilterBrand = $scope.listSpMoi;
    }
    $scope.listSpMoi.map(function (item) {
      if (item.brand == $scope.listBrand[index].name) {
        $scope.listFilterBrand.push(item);
      }
    });
  };

  $http.get(gioHangAPI).then(function (response) {
    if (response.statusText === "OK") {
      $scope.listGioHang = response.data;
    }
  }),
    function (e) {
      console.log(e);
    };

  $scope.addGioHang = function (event, index) {
    event.preventDefault();
    var check = $scope.listGioHang.findIndex((item) => {
      return item.id == $scope.detailSpMoi.id;
    });
    if (check == -1) {
      $scope.detailSpMoi.quantity = 1;
      $http.post(gioHangAPI, $scope.detailSpMoi).then(function (response) {
        $scope.listGioHang.push(response.data);
      });
    }
    if (check != -1) {
      $scope.detailSpMoi.quantity = $scope.listGioHang[check].quantity + 1;
      $http
        .put(gioHangAPI + "/" + $scope.detailSpMoi.id, $scope.detailSpMoi)
        .then(function (response) {
          $scope.listGioHang[check] = response.data;
        });
    }
  };

  $scope.deleteGioHang = function (event, index) {
    event.preventDefault();
    let gh = $scope.listGioHang[index];
    let api = gioHangAPI + "/" + gh.id;
    $http.delete(api).then(function (response) {
      $scope.listGioHang.splice(index, 1);
    });
  };

  $scope.listSpDaMua = [];

  $http.get(spDaMuaAPI).then(function (response) {
    if (response.statusText === "OK") {
      $scope.listSpDaMua = response.data;
    }
  }),
    function (e) {
      console.log(e);
    };

  $scope.deleteSpDaMua = function (event, index) {
    event.preventDefault();
    let sp = $scope.listSpDaMua[index];
    let api = spDaMuaAPI + "/" + sp.id;
    $http.delete(api).then(function (response) {
      $scope.deleteSpDaMua.splice(index, 1);
    });
  };
};
