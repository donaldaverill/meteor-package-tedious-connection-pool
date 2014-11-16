if (Meteor.isServer) {
  Tinytest.add('TediousConnectionPool - defined on server', function(test) {
    test.notEqual(TediousConnectionPool, undefined, 'Expected ' +
      'TediousConnectionPool to be defined on the server.');
  });
}

if (Meteor.isClient) {
  Tinytest.add('TediousConnectionPool - undefined on client', function(test) {
    TediousConnectionPool = TediousConnectionPool || undefined;
    test.isUndefined(TediousConnectionPool, 'Expected TediousConnectionPool ' +
      'to be undefined on the client.');
  });
}
