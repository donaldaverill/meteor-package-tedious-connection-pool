[![Build Status](https://travis-ci.org/fourquet/meteor-package-tedious-connection-pool.svg)](https://travis-ci.org/fourquet/meteor-package-tedious-connection-pool)
```bash
meteor add fourquet:tedious-connection-pool
```
[tedious-connection-pool](https://www.npmjs.org/package/tedious-connection-pool) npm module wrapped for Meteor. Used for connection pooling with Microsoft SQL Server and Azure databases. Depends on fourquet:tedious.

For more, see the [tedious Documentation](http://pekim.github.io/tedious/index.html).

Example:
```javascript
var connectionPool = new TediousConnectionPool({
  max: 10,
  min: 0,
  idleTimeoutMillis: 30000
}, {
  userName: 'userName@something.database.windows.net',
  password: 'password',
  server: 'something.database.windows.net',
  options: {
    encrypt: true,
    database: 'someDatabase'
  }
});

connectionPool.acquire(function (err, connection) {
  var request = new Tedious.Request('SELECT TOP 20 * FROM dbo.SomeTable',
    function (
      err,
      rowCount) {

      if (err) {
        console.log(err);
      } else {
        console.log(rowCount + ' rows');
      }
      connection.release();
    });

  request.on('row', function (columns) {
    var r = '';
    columns.forEach(function (column) {
      r = r + ' ' + column.value;
    });
    console.log('\n ', r);
  });

  connection.execSql(request);
});
```

#### Version
0.3.9_1

####License
MIT
