// Copyright IBM Corp. 2016. All Rights Reserved.
// Node module: loopback-workspace
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

'use strict';

var loopback = require('loopback');
var boot = require('loopback-boot');

var app = (module.exports = loopback());

app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit('started');
    var baseUrl = app.get('url').replace(/\/$/, '');
    console.log('Web server listening at: %s', baseUrl);
    if (app.get('loopback-component-explorer')) {
      var explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    }
  });
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module) app.start();
});

app.models.user.find((err, result) => {
  if (result.length === 0) {
    const user = {
      email: 'nick@nick.com',
      password: 'test',
      username: 'nick'
    };
    app.models.user.create(user, (err, result) => {
      console.log('Tried to create user', err, result);
    });
  }
});
app.models.user.afterRemote('create', (ctx, user, next) => {
  console.log('New user is', user);
  app.models.Profile.create(
    {
      first_name: user.username,
      created_at: new Date(),
      userId: user.id
    },
    (err, result) => {
      if (!err && result) {
        console.log('created new profile', result);
      } else {
        console.log('there is an error', err);
      }
      next();
    }
  );
});
