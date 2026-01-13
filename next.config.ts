/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Replace 'your-repo-name' with your actual repository name
  basePath: '/oc-web', 
  // This ensures CSS/JS/Images are prefixed correctly
  assetPrefix: '/oc-web/', 
  images: {
    unoptimized: true,
  },
};

export default nextConfig;