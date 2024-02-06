'use client'
import { CartContextProps } from '@/types';
import { createContext } from 'react';

export const CartContext = createContext<CartContextProps>({ cart: [], addItem: () => (""), removeItem: () => ("")})