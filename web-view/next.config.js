/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'export',
    basePath: '/design-ai-agent-support', // GitHub Project Page Repository Name
    images: {
        unoptimized: true, // Static Export doesn't support Image Optimization
    },
};

export default nextConfig;
