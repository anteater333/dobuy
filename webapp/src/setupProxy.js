const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    "/api",
    createProxyMiddleware({
      target: process.env.REACT_APP_API_SERVER_ADDR
        ? process.env.REACT_APP_API_SERVER_ADDR
        : "https://deg.anteater-lab.link/dobuy",
      changeOrigin: true,
      secure: false,
      pathRewrite: { "^/api": "" },
    })
  );
};
