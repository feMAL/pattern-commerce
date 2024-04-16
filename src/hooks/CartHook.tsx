'use client';

import { ICartItem } from "@/types";
import { useState } from "react"


const useCart = (initialValue: ICartItem[]) => {
    const [cart, setCart] = useState(initialValue)

    const addItem = (item : ICartItem) => {

        const isInCart = cart.find((element) => element.item_id === item.item_id);

        if(!isInCart) {
            const newCart =  [...cart , item];
            setCart(newCart);
        }

    }

    const setFullCart = (cart : ICartItem[]) => {
        setCart(cart);
    }

    const removeItem = (item_id: string) => {
        let newCart =  [...cart];

        newCart = newCart.filter((item) => (item.item_id !== item_id))

        setCart(newCart);
    }

    return {
        cart,
        addItem,
        removeItem,
        setFullCart
    }
}

export default useCart