// @ts-check

/**
 * @type {import("next").NextConfig}
 * */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    compiler: {
        styledComponents: true,
    },
    images: {
        domains: ["127.0.0.1"],
    },
};

module.exports = nextConfig;
