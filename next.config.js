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
        domains: [
            String(process.env.NEXT_PUBLIC_BASE_URL)
                .split("//")[1]
                .split(":")[0],
        ],
    },
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
    },
};

module.exports = nextConfig;
