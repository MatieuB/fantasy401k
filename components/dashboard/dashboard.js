angular.module("fantasy401k")
  .component('mbDashboard', {
    templateUrl: '/components/dashboard/dashboard.html',
    controller: function ($scope){
      $scope.test = 'variables!';
    }
  })
