Package.describe({
  name: 'component-browser',
  version: '0.0.1',
  summary: '',
  git: '',
  documentation: 'README.md',
  debugOnly: true
});

Package.onUse(function(api) {
  api.versionsFrom('1.5.1');
  api.use('templating', 'client');
  api.use('ecmascript');
  api.use('kadira:flow-router', 'client');
  api.use('kadira:blaze-layout', 'client');
  api.use('manuel:viewmodel', 'client');
  api.use('nathantreid:css-modules', 'client');
  api.use('reactive-dict');
  api.mainModule('component-browser.js');
  api.addFiles([
    'route.js',
    'views/component-browser.html',
    'views/component-browser.js',
    'views/component-browser.m.css',
    'views/component-frame.html',
    'views/component-frame.js'
  ], 'client');

  api.imply('component-spec-handler');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('component-browser');
  api.mainModule('component-browser-tests.js');
});
