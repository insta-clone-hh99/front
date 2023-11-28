const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
    app.use(
        '/',
        createProxyMiddleware({
            target: 'http://13.124.84.17:8080',
            changeOrigin: true,
        }),
    )
}
