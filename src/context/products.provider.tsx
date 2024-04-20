"use client"
import { useProducts } from "@/hooks/ProductsHook";
import { ProductContext } from "./products.context";

export const ProductProvider = ({children} : { children: React.ReactNode }) => {
  
    const { products } = useProducts();

    return (
    <ProductContext.Provider value={{products }}>
        {children}
    </ProductContext.Provider>
  )
}
