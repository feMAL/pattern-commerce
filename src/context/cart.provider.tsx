'use client'
import React from 'react'
import { CartContext } from './cart.context'
import useCart from '@/hooks/CartHook'
import { CartItem } from '@/types';

export const CartProvider = ({children} : { children: React.ReactNode }) => {

    const {cart, addItem, removeItem} = useCart([{

      item_id: new Date().getTime().toString(),
      small_img: "/vercel.svg",
      description: "Pretty-Flamingo",
      price: 20
  },
  {
      item_id: new Date().getTime().toString(),
      small_img: "/vercel.svg",
      description: "Pretty Flowers Shop",
      price: 25
  }]);

    return (
    <CartContext.Provider value={{cart, addItem, removeItem}}>
        {children}
    </CartContext.Provider>
  )
}
