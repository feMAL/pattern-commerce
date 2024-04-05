import React, {useState, useEffect} from 'react'
import { getProductById, getAllProduct } from '@/services/products.service'
import { CatalogPattern } from '@/types';

export const useFetchProducts = ( ) => {
    const [products, setProducts ] = useState<CatalogPattern[]>([]);
    const [isLoading, setIsLoading ] = useState(true)

  const getProducts = async () => {
    const allProducts = await getAllProduct();
    setProducts(allProducts);
    setIsLoading(false);
  }

  useEffect( () => {
    getProducts();
  },[]);
  
    return {
        products,
        isLoading
    }
}