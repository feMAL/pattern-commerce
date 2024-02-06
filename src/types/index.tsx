export interface Pattern {
    id: string;
    name: string;
    title: string;
    price: number;
    image: string;
    isExclusive: boolean;
    description: string;
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
    item_id: string;
    small_img: string;
    description: string;
    price:number
}

export interface CartItemProps {
    item: CartItem
}

export interface CartContextProps {
    cart: CartItem[]
    addItem: ( item: CartItem ) => void
    removeItem: ( item_id: string) => void
}

export interface NavBarProps {
    cart: CartItem[]
}

export interface PatternGroupsProp {
    patternGroups: PatternGroup[]
}

export interface CartHookProps {
    initialValue: Array<CartItem>
}