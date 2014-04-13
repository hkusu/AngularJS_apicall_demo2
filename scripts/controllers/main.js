'use strict';

angular.module('apiTestApp')
  .controller('MainCtrl', function ($scope, GetJson) {

    $scope.items = GetJson.all();

  });
