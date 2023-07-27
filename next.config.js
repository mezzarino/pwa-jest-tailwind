const path = require("path");
const withPWAInit = require("@imbios/next-pwa");

const withPWA = withPWAInit({
    dest: 'public',
    register: true,
    skipWaiting: true,
    buildExcludes: ["app-build-manifest.json"],
    fallbacks: {
        image: '/images/384x384.jpg',
        document: '/offline/'
    }
});

 const securityHeaders = [
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Access-Control-Allow-Origin', value: 'https://pwa-jest-tailwind.vercel.app' },
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
  { key: 'X-XSS-Protection', value: '1; mode=block' },
  { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains; preload' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
  { key: 'Report-To', value: '{"group":"default","max_age":31536000,"endpoints":[{"url":https://pwapoc.report-uri.com/a/d/g}],"include_subdomains":true}' },
  { key: 'NEL', value: '{"report_to":"default","max_age":31536000,"include_subdomains":true}' },
  { key: 'Cross-Origin-Embedder-Policy', value: 'require-corp' },
  { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
  { key: 'Cross-Origin-Resource-Policy', value: 'same-site' },
];


module.exports = withPWA({
    experimental: {
        serverActions: true,
    },
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'fakeimg.pl',
                port: '',
            },
        ],
    },
    async headers() {
        return [
        { source: '/(.*)', headers: securityHeaders },
        ];
    }
});
