import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Required for GitHub Pages deployment at username.github.io/repo-name/
  // If deploying to a custom domain or root (username.github.io), set this to "/"
  basePath: "/Hanzislot2",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
