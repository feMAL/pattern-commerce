import { IConfiguration } from "./configuration.interface"

export const configuration: IConfiguration= {
    backend: {
        url: process.env.BACKEND_URL,
        helthPath: process.env.BACKEND_URL_HEALTH_PATH
    }
}
