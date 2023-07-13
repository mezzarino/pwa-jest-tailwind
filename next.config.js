/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
    dest: 'public',
    register: true,
    skipWaiting: true,
    fallbacks: {
        image: 'https://fakeimg.pl/384x384',
        document: '/offline/'
      }
  });

module.exports = withPWA({
    reactStrictMode: true,
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'fakeimg.pl',
            port: '',
          },
        ],
      }
});
