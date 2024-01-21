export interface Pattern {
    id: string;
    name: string;
    title: string;
    price: number;
    image: string;
    isExclusive: boolean;
    description?: string;
}

export interface CatalogPattern {
    name: string;
    title: string;
    description?: string;
    products: Pattern[];
}

export interface PatternCardProp {
    pattern: Pattern
}

export interface PatternGroup {
    title: string;
    link: string;
}

export interface CartItem {
    small_img: string;
    description: string;
    price:number
}

export interface CartItemProps {
    item: CartItem
}

export interface NavBarProps {
    cart: CartItem[]
}

export interface PatternGroupsProp {
    patternGroups: PatternGroup[]
}