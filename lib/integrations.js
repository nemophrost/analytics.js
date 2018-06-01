/* eslint quote-props: off */
'use strict';

/*
 Add all integrations you want registered here.
 Integration repos: https://github.com/segment-integrations?utf8=%E2%9C%93&query=analytics.js
 Make sure the integrations added are also installed and saved in the package.json
 */
module.exports = {
  'amplitude': require('@segment/analytics.js-integration-amplitude'),
  'google-analytics': require('@segment/analytics.js-integration-google-analytics'),
  'mixpanel': require('@segment/analytics.js-integration-mixpanel')
};
