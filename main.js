var app = angular.module("TodoApp", [])

app.controller("TodoCtrl", function($scope) {
  $scope.title = "Welcome to your ToDo App";
})

app.controller("PastaCtrl", function($scope) {
	$scope.pasta = "I love carbs";
	$scope.foods = "";
})