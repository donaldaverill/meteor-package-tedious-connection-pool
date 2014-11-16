Package.describe({
  name: 'donaldaverill:tedious-connection-pool',
  summary: 'tedious-connection-pool npm package wrapped for Meteor',
  version: '0.3.0_2',
  git: 'https://github.com/donaldaverill/meteor-package-tedious-connection-pool'
});
Npm.depends({
  'tedious': '1.7.0',
  'tedious-connection-pool': '0.3.0'
});
Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('donaldaverill:tedious@1.7.0_2', ['server']);
  if (typeof Tedious === 'undefined') {
    api.export('Tedious', ['server']);
  }
  api.export('TediousConnectionPool', ['server']);
  api.addFiles('donaldaverill:tedious-connection-pool.js', ['server']);
});
Package.onTest(function(api) {
  api.use('tinytest', ['client', 'server']);
  api.use('donaldaverill:tedious-connection-pool', ['server']);
  api.addFiles('donaldaverill:tedious-connection-pool-tests.js', ['client', 'server']);
});
