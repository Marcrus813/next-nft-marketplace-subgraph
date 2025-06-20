/** @type {import("next").NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    allowedDevOrigins: ["local-origin.dev", "*.local-origin.dev", "192.168.2.3"],
};

export default nextConfig;
