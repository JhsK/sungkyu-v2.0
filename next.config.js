/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3.ap-northeast-2.amazonaws.com',
        port: '',
        pathname: '/sungkyu.info/**',
      },
    ],
  },
  experimental: {
    appDir: true,
    serverActions: true,
    // mdxRs: true,
  },
};

// const withMDX = require('@next/mdx')();
// module.exports = withMDX(nextConfig);
module.exports = nextConfig;
