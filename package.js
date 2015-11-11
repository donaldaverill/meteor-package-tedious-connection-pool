Package.describe({
  name: 'fourquet:tedious-connection-pool',
  summary: 'tedious-connection-pool npm package wrapped for Meteor',
  version: '0.3.9_1',
  git: 'https://github.com/fourquet/meteor-package-tedious-connection-pool'
});
Npm.depends({
  'tedious': '1.13.1',
  'tedious-connection-pool': '0.3.9'
});
Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('fourquet:tedious@1.13.1_1', ['server']);
  if (typeof Tedious === 'undefined') {
    api.export('Tedious', ['server']);
  }
  api.export('TediousConnectionPool', ['server']);
  api.addFiles('tedious-connection-pool.js', ['server']);
});
Package.onTest(function(api) {
  api.use('tinytest', ['client', 'server']);
  api.use('fourquet:tedious-connection-pool', ['server']);
  api.addFiles('tedious-connection-pool-tests.js', ['client', 'server']);
});
