'use client'
import { ProductsContextProps } from '@/types';
import { createContext } from 'react';

export const ProductContext = createContext<ProductsContextProps>({ products: [] })