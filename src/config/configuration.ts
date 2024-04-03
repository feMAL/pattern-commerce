import { IConfiguration } from "./configuration.interface"

export const configuration: IConfiguration= {
    backend: {
        url: process.env.BFF_URL,
        helthPath: process.env.BFF_URL_HEALTH_PATH
    }
}
