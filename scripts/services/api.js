'use strict';

angular.module('apiTestApp')
  .factory('GetJson', function ($resource) {

    var res = $resource('data/sample.json');

    return {
      all: function () {
        return res.query();
      }
    };
  });
