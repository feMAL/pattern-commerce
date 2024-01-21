/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
        {
            protocol: 'https',
            hostname: 'www.lorartsofficial.com',
            port: '',
            pathname: '/wp-content/uploads/2024/01/Pretty-Flamingo-PNG.jpg',
        },
        ]
    }
}

module.exports = nextConfig
