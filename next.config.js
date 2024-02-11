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
        {
            protocol: 'https',
            hostname: 'www.lorartsofficial.com',
            port: '',
            pathname: '/wp-content/uploads/2024/02/Super-Tooth-Info_0006_BUBBLE.jpg',
        },

        ]
    }
}

module.exports = nextConfig
