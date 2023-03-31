import { createProxyMiddleware } from "http-proxy-middleware";

export default function(app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://quixotic-earth-production.up.railway.app",
      changeOrigin: true,
      pathRewrite: {
        "^/api": "/api" // This will remove the "/api" prefix from the request URL
      }
    })
  );
}
