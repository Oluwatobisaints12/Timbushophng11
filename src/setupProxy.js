const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://api.timbu.cloud',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '', // remove /api prefix when forwarding the request to the target
      },
    })
  );
};
