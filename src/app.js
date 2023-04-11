var axios_1 = require('axios');
var movie_1 = require('./services/movie');
var LORG = /** @class */ (function () {
  function LORG(accessKey) {
    this.client = axios_1['default'].create({
      baseURL: LORG.API_URL,
      headers: __assign(
        {},
        !!accessKey && { Authorization: 'Bearer ' + accessKey },
      ),
    });
    this.movie = new movie_1['default'](this.client);
  }
  LORG.API_URL = 'https://the-one-api.dev/v2';
  return LORG;
})();
exports['default'] = LORG;
