
interface ITarget {
    url: string | undefined;
    helthPath: string | undefined;
}

export interface IConfiguration {
    backend: ITarget | undefined;
}