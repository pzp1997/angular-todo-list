var app = angular.module('myApp', []);

app.controller('todoList', ['$scope', function($scope) {
  $scope.todoItems = [
    {
      "task": "wash laundry",
      "created": 1466470000000,
      "completed": false,
      "urgent": false
    },
    {
      "task": "mow the lawn",
      "created": 1466500000000,
      "completed": false,
      "urgent": false
    }
  ];

  $scope.addTodo = function(newTask) {
    $scope.todoItems.push({
      "task": newTask.description,
      "created": Date.now(),
      "completed": false,
      "urgent": newTask.urgent
    });
    $scope.newTask = {};
  };
}]);
