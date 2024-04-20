"use client"
import React, {useState, useEffect} from 'react'
import { getProductById,getAllProductToCatalog } from '@/services/products.service'
import { CatalogPattern, IPattern } from '@/types';

export const useProducts = ( ) => {
    const [products, setProducts ] = useState<CatalogPattern[]>([]);
    const [isLoading, setIsLoading ] = useState(true)

  const getProducts = async () => {
    const allProducts = await getAllProductToCatalog();
    setProducts(allProducts);
    setIsLoading(false);
  }

  useEffect( () => {
    getProducts();
  },[]);
  
    return {
        products,
        isLoading,
    }
}

export const useFetchProduct = ( id: string ) => {
  const [product, setProduct ] = useState<IPattern>();
  const [isLoading, setIsLoading ] = useState(true)

const getProduct = async () => {
  const products = await getProductById(id);
  setProduct(products);
  setIsLoading(false);
}

useEffect( () => {
  getProduct();
},[]);

  return {
      product,
      isLoading
  }
}