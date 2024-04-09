export * from './props'
export * from './states'
export * from './paypal'
export interface IPatternVariants{
    variant_identification : string;
    description: string;
    image: string[];
    color: string;
    tags: ITags[];
}

export interface ICategory{
    name : string;
    description: string;
}

export interface IPattern {
    pattern_identification: string;
    title: string;
    price: number;
    isExclusive: boolean;
    variants: IPatternVariants[];
    types: string;
    categories: ICategory[]
} 

export interface CatalogPattern {
    name: string;
    description: string;
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
