"use client"
import { PatternDetails } from "@/components";
import { data } from "@/constants";
import { useFetchProduct } from "@/hooks/ProductsHook";
import { getProductById } from "@/services/products.service";
import { IPattern } from "@/types";
import { NextUIProvider } from "@nextui-org/react";
import '@/styles/loader.css'


export default function Page({ params }: { params: { id: string } }) {
  
  const {id} = params;
  const {product, isLoading} = useFetchProduct(id);

  //const product = getProductById(id);
  //const products: IPattern[] = data[0].products.concat(data[1].products)
  //const product = products.find(el => el.pattern_identification === id)

  return (<div className='flex w-[95%] h-full pt-20 justify-center'>
    <NextUIProvider>
      {
        !isLoading? product ? (<PatternDetails product={product}>
      </PatternDetails>) : (<>404 NOT FOUND ID</>) : <div className="loader"></div>
      
    }
      
    </NextUIProvider>
  </div>)
}