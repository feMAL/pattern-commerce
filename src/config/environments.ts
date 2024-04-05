export const Config = () => ({
    services: {
        bff: {
            url: process.env.NEXT_PUBLIC_BFF_URL,
            helthPath: process.env.NEXT_PUBLIC_BFF_URL_HEALTH_PATH
        }
    }
})
