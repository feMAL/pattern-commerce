"use client"
import { PatternDetails } from "@/components";
import { data } from "@/constants";
import { getProductById } from "@/services/products.service";
import { IPattern } from "@/types";
import { NextUIProvider } from "@nextui-org/react";


export default function Page({ params }: { params: { id: string } }) {

  const {id} = params;
  //const product = getProductById(id);
  const products: IPattern[] = data[0].products.concat(data[1].products)
  const product = products.find(el => el.id === id)

  return (<div className='flex w-[95%] h-full pt-20 justify-center'>
    <NextUIProvider>
      {product ? (<PatternDetails product={product}>
      </PatternDetails>) : (<>404 NOT FOUND ID</>)}
      
    </NextUIProvider>
  </div>)
}