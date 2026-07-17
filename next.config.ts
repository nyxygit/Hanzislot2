import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Required for GitHub Pages deployment at username.github.io/repo-name/
  // If deploying to a custom domain or root (username.github.io), set this to "/"
  // Use empty string for local development (localhost:3000)
  basePath: process.env.NODE_ENV === "production" ? "/Hanzislot2" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
