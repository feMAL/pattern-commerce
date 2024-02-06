'use client'
import { CartItem, CartHookProps } from "@/types";
import { useState } from "react"


const useCart = (initialValue: CartItem[]) => {

    const [cart, setCart] = useState(initialValue)

    const addItem = (item : CartItem) => {

        const isInCart = cart.find((element) => element.item_id === item.item_id);

        if(!isInCart) {
            const newCart =  [...cart , item];
        
            setCart(newCart);    
        }

    }

    const removeItem = (item_id: string) => {
        let newCart =  [...cart];

        newCart = newCart.filter((item) => (item.item_id === item_id))
        
        setCart(newCart);
    }

    return {
        cart,
        addItem,
        removeItem
    }
}

export default useCart