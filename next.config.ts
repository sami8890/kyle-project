
// next.config.js
module.exports = {
  images: {
    domains: [
      'cdn.sanity.io',
      'img.youtube.com'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
}