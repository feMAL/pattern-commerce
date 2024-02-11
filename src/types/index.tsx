export * from './props'
export interface IPatternVariants{
    name : string;
    image: string;
    color: string;
}

export interface IPattern {
    id: string;
    name: string;
    title: string;
    price: number;
    image: string;
    isExclusive: boolean;
    variants: IPatternVariants[],
    tags: ITags[],
    description?: string;
} 

export interface CatalogPattern {
    name: string;
    title: string;
    description?: string;
    products: IPattern[];
}
export interface PatternGroup {
    title: string;
    link: string;
}

export interface ICartItem {
    item_id: string;
    small_img: string;
    description: string;
    price:number
}

export interface ITags {
    id: string;
    name: string;
    description: string;
}
