'use strict';
exports.__esModule = true;
var methods_1 = require('../util/methods');
var Movie = /** @class */ (function () {
  function Movie(client) {
    this.client = client;
  }
  Movie.prototype.list = function (options) {
    return this.client
      .get('' + Movie.BASE_PATH + methods_1.encodeOptions(options))
      .then(function (response) {
        return response.data;
      });
  };
  Movie.prototype.get = function (id) {
    return this.client
      .get(Movie.BASE_PATH + '/' + id)
      .then(function (response) {
        return response.data.docs[0];
      });
  };
  Movie.prototype.get = function () {
    return this.client.get(Movie.BASE_PATH).then(function (response) {
      return response.data.docs[0];
    });
  };
  Movie.prototype.get = function (id) {
    return this.client
      .get(Movie.BASE_PATH + '/' + id + '/' + 'quote')
      .then(function (response) {
        return response.data.docs[0];
      });
  };

  Movie.BASE_PATH = '/movie';
  return Movie;
})();
exports['default'] = Movie;
