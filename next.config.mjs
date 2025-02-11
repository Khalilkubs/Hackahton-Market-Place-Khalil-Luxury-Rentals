const nextConfig = {
    images: {
      domains: ["cdn.sanity.io"],
    },
    typescript: {
      ignoreBuildErrors: true, // 🚨 Use with caution
    },
    trailingSlash: true,  // ✅ Ensures correct routing on Vercel
  };
  
  export default nextConfig;
  