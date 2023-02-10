/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['lh3.googleusercontent.com'],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/chat',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
