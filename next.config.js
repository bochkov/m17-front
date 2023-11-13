const API_URL = process.env.API_URL

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    async rewrites() {
        return [{
            source: '/api/:path*',
            destination: `${API_URL}/api/:path*`
        }]
    }
}

module.exports = nextConfig
