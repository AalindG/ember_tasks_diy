/* eslint-env node */
'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    // Add options here
  });

  app.import('public/bower_components/bootstrap/dist/css/bootstrap.css')
  // app.import('public/bower_components/moment/src/moment.js')

  return app.toTree();
};
