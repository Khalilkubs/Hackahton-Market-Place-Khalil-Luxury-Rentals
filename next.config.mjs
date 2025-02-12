/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  reactStrictMode: true,
  trailingSlash: false,
  images: {
    domains: ["cdn.sanity.io"], // Add allowed image host
  },
};

export default nextConfig;
