'use client'
import React from 'react'
import { CartContext } from './cart.context'
import useCart from '@/hooks/CartHook'

export const CartProvider = ({children} : { children: React.ReactNode }) => {

    const {cart, addItem, removeItem} = useCart([]);

    return (
    <CartContext.Provider value={{cart, addItem, removeItem}}>
        {children}
    </CartContext.Provider>
  )
}
