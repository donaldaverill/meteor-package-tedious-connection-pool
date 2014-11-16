Package.describe({
  name: 'donaldaverill:tedious-connection-pool',
  summary: 'tedious-connection-pool npm package wrapped for Meteor',
  version: '0.3.0_1',
  git: 'https://github.com/donaldaverill/meteor-package-tedious-connection-pool'
});

Npm.depends({
  'tedious-connection-pool': '0.3.0'
});
Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('donaldaverill:tedious', ['server']);
  api.export('TediousConnectionPool', ['server']);
  api.addFiles('donaldaverill:tedious-connection-pool.js', ['server']);
});

Package.onTest(function(api) {
  api.use('tinytest', ['client', 'server']);
  api.use('donaldaverill:tedious-connection-pool', ['server']);
  api.addFiles('donaldaverill:tedious-connection-pool-tests.js', ['client', 'server']);
});
