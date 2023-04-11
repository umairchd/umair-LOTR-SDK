'use strict';
exports.__esModule = true;
var request_1 = require('../types/request.js');
function encodeOptions(options) {
  if (!options) return '';
  var limit = options.limit,
    page = options.page,
    offset = options.offset,
    sort = options.sort,
    filter = options.filter;
  var params = [];
  // pagination
  if (limit) params.push('limit=' + limit);
  if (page) params.push('page=' + page);
  if (offset) params.push('offset=' + offset);
  // sorting
  if (sort) {
    var key = Object.keys(sort)[0];
    var value = sort[key];
    params.push('sort=' + key + ':' + value);
  }
  // filtering
  if (filter) {
    Object.keys(filter).forEach(function (operator) {
      switch (operator) {
        case request_1.FilterOperatorEnum.isEqualTo:
        case request_1.FilterOperatorEnum.regex:
          Object.entries(filter[operator]).forEach(function (entry) {
            var key = entry[0];
            var value = entry[1];
            params.push(key + '=' + value);
          });
          break;
        case request_1.FilterOperatorEnum.isNotEqualTo:
          Object.entries(filter.isNotEqualTo).forEach(function (entry) {
            var key = entry[0];
            var value = entry[1];
            params.push(key + '!=' + value);
          });
          break;
        case request_1.FilterOperatorEnum.includes:
          Object.entries(filter.includes).forEach(function (entry) {
            var key = entry[0];
            var value = entry[1];
            params.push(key + '=' + value.join(','));
          });
          break;
        case request_1.FilterOperatorEnum.excludes:
          Object.entries(filter.excludes).forEach(function (entry) {
            var key = entry[0];
            var value = entry[1];
            params.push(key + '!=' + value.join(','));
          });
          break;
        case request_1.FilterOperatorEnum.propertyExists:
          params.push('' + filter.propertyExists);
          break;
        case request_1.FilterOperatorEnum.propertyNotExists:
          params.push('!' + filter.propertyNotExists);
          break;
        case request_1.FilterOperatorEnum.greaterThan:
          Object.entries(filter.greaterThan).forEach(function (entry) {
            var key = entry[0];
            var value = entry[1];
            params.push(key + '>' + value);
          });
          break;
        case request_1.FilterOperatorEnum.LessThan:
          Object.entries(filter.LessThan).forEach(function (entry) {
            var key = entry[0];
            var value = entry[1];
            params.push(key + '<' + value);
          });
          break;
        case request_1.FilterOperatorEnum.greaterThanOrEqualTo:
          Object.entries(filter.greaterThanOrEqualTo).forEach(function (entry) {
            var key = entry[0];
            var value = entry[1];
            params.push(key + '>=' + value);
          });
          break;
        case request_1.FilterOperatorEnum.LessThanOrEqualTo:
          Object.entries(filter.LessThanOrEqualTo).forEach(function (entry) {
            var key = entry[0];
            var value = entry[1];
            params.push(key + '<=' + value);
          });
          break;
        default:
          throw new Error('Unknown filter operator: ' + operator);
      }
    });
  }
  return '?' + params.join('&');
}
exports.encodeOptions = encodeOptions;
