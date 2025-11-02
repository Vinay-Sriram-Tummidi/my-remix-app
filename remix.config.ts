import type { AppConfig } from "@remix-run/dev";

const config: AppConfig = {
  // Ignore dotfiles (like .env, .gitignore, etc.)
  ignoredRouteFiles: ["**/.*"],

  // Remix app directory (default)
  appDirectory: "app",

  // Directory for static assets built by Vite
  assetsBuildDirectory: "build/client",

  // Path where Remix outputs the built server bundle
  serverBuildPath: "build/server/index.js",

  // Using ESM since your package.json has "type": "module"
  serverModuleFormat: "esm",

  // Public URL path prefix for built assets
  publicPath: "/build/",
};

export default config;
