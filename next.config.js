/** @type {import('next').NextConfig} */

const withPWA = require("@imbios/next-pwa")({
    dest: "public",
    scope: '/app',
});

module.exports = withPWA({
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
