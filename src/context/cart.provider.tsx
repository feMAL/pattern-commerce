'use client';

import React, { useEffect } from 'react'
import { CartContext } from './cart.context'
import useCart from '@/hooks/CartHook'
import { ICartItem } from '@/types'

const getFromLocalStorage = (key: string) => {
  if (!key || typeof window === 'undefined') {
      return "[]"
  }
  return localStorage.getItem(key)
}

export const CartProvider = ({children} : { children: React.ReactNode }) => {
  
    let str:string | null = getFromLocalStorage('cart');
    let store: ICartItem[];
    
    if(str){
      store = JSON.parse(str) as ICartItem[];
    } else {
      store = [] as ICartItem[];
    }

    const {cart, addItem, removeItem} = useCart(store);

    return (
    <CartContext.Provider value={{cart, addItem, removeItem }}>
        {children}
    </CartContext.Provider>
  )
}
