'use strict';

const StripeResource = require('../StripeResource');

module.exports = StripeResource.extend({
  path: 'exchange_rates',

  includeBasic: ['list', 'retrieve'],
});
