/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ['images.unsplash.com'],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**',
        },
      ],
    },
    // Enable experimental features if needed
    // experimental: {
    //   serverActions: true,
    // },
  }
  
  export default nextConfig;