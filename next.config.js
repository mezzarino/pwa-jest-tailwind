const path = require("path");
const withPWAInit = require("next-pwa");

const withPWA = withPWAInit({
    dest: 'public',
    buildExcludes: ["app-build-manifest.json"],
    fallbacks: {
        image: '/images/384x384.jpg',
        document: '/offline/'
    }
});

const generateAppDirEntry = (entry) => {
    const packagePath = require.resolve('next-pwa');
    const packageDirectory = path.dirname(packagePath);
    const registerJs = path.join(packageDirectory, "register.js");

    return entry().then((entries) => {
        if (entries["main-app"] && !entries["main-app"].includes(registerJs)) {
            if (Array.isArray(entries["main-app"])) {
                entries["main-app"].unshift(registerJs);
            } else if (typeof entries["main-app"] === "string") {
                entries["main-app"] = [registerJs, entries["main-app"]];
            }
        }
        return entries;
    });
};

 const securityHeaders = [
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Access-Control-Allow-Origin', value: 'https://pwa-jest-tailwind.vercel.app' },
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
  { key: 'X-XSS-Protection', value: '1; mode=block' },
  { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains; preload' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
];


module.exports = withPWA({
    reactStrictMode: true,
    webpack: (config) => {
        const entry = generateAppDirEntry(config.entry);
        config.entry = () => entry;

        return config;
    },
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
