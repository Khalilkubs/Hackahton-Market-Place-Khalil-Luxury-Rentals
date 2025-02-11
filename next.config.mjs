/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ["cdn.sanity.io"],
    },
    typescript: {
      ignoreBuildErrors: true, // 🚨 Use with caution
    },
  };
  
  export default nextConfig; // ✅ Correct way for ES Modules
  