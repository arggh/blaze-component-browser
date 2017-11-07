export default setupRoutes = (basePath) => {
  let routePath = basePath;
  if (routePath.indexOf('/') > 0) {
    routePath = `/${routePath}`;
  }

  const browserRoutes = FlowRouter.group({
    prefix: routePath,
    name: 'componentBrowserGroup'
  });

  browserRoutes.route('/', {
    name: 'componentsBrowser',
    action: () => {
      BlazeLayout.render('componentBrowser');
    }
  });

  browserRoutes.route('/component/:componentTemplate/:configuration', {
    name: 'componentsBrowser',
    action: () => {
      BlazeLayout.render('componentBrowser');
    }
  });


  browserRoutes.route('/component-browser-frame', {
    name: 'frame',
    action: () => {
      BlazeLayout.render('componentFrame');
    }
  });
};
