var KarenRobles = angular.module('KarenRobles', []);
KarenRobles.controller('Operaciones', function($scope) {
$scope.precio = 25
$scope.iva = 0.12
$scope.precio = $scope.precio
  $scope.iva = $scope.precio * $scope.iva;
}); 