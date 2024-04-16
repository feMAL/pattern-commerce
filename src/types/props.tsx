import { ICartItem, IPattern, IPatternVariants, PatternGroup } from ".";

export interface ProductDetailsProps {
    product:  IPattern;
}

export interface ProductDetailsVariantSelectionsProps {
    variants:  IPatternVariants[];
    setItemSelected: (item: string) => void
}

export interface CartItemProps {
    item: ICartItem
}

export interface CartContextProps {
    cart: ICartItem[]
    addItem: ( item: ICartItem ) => void
    removeItem: ( item_id: string) => void
    setFullCart?: (cart: ICartItem[] ) => void
}

export interface NavBarProps {
    cart: ICartItem[]
}

export interface PatternGroupsProp {
    patternGroups: PatternGroup[]
}

export interface CartHookProps {
    initialValue: Array<ICartItem>
}

export interface PatternCardProp {
    pattern: IPattern
}
