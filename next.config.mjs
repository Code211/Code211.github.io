import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["three"],
  webpack: (config, { isServer }) => {
    // Ensure @/ resolves to project root (required for Netlify and other CI builds)
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": projectRoot,
      "@/": path.join(projectRoot, "/"),
    };
    return config;
  },
};

export default nextConfig;
