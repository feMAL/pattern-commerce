"use client"
import { CartContext } from '@/context/cart.context';
import { ICartItem, IPattern, ProductDetailsProps } from '@/types';
import React, { useContext, useState } from 'react';
import Image from 'next/image';
import PatternDetailsSelector from './PatternDetailsSelector';

const PatternDetails = ( { product }: ProductDetailsProps ) => {

  const { cart, addItem} = useContext(CartContext);
  const [ itemSelected, setItemSelected ] = useState("")

  const patternToItemCart  = (pattern: IPattern): ICartItem => {
    const cartItem: ICartItem = {
      item_id: pattern.pattern_identification,
      description:`${pattern.isExclusive? '[Exclusive]': '[Non-Exclusive]'} ${pattern.title} - ${itemSelected}` ,
      price: pattern.price,
      small_img: pattern.variants[0].image[0]
    }
    return cartItem; 
  }

  const itemIsInToChart = (product: IPattern) =>{
    return !!cart.find((item) => item.item_id === product.pattern_identification);
  } 

  const addingItemToCart = ( pattern: IPattern ) => {
      const itemToCart = patternToItemCart(pattern)
      addItem(itemToCart);
    }

  const triggerItemSelected = (color: string) =>  {
    setItemSelected(color)
  }

  return (
    <section className='w-[100%] m-12 '>
      <div className='pattern-details'>
        <div className='pattern-details__content'>
          <div className='pattern-details__content-image'>
            <Image src={product.variants[0].image[0]} className='object-contain' alt={product.title} width={600} height={600} priority></Image>
          </div>
        </div>
        <div className='pattern-details__content'>
          <div className='pattern-details__content-title'>
            {`${product.isExclusive? '[Exclusive]': '[Non-Exclusive]'}`} {product.title}
          </div>
          <div className='pattern-details__content-price'>
            <span> $ <span className='font-extrabold'>{product.price}</span></span> 
          </div>
          <div className='block m-auto text-left col-auto'>
          <span className='pl-12 pb-4 font-semibold'>Color</span><br />
          </div>
          <div className='block max-w-[80%] mt-2 ml-12 justify-center  col-auto'>
            <PatternDetailsSelector
              setItemSelected={triggerItemSelected}
              variants={product.variants}>
            </PatternDetailsSelector>
          </div>
          {
            product.title? ( <>
          <hr className='mt-4 w-[75%] m-auto' />
          <div className="pattern-details__content-description">
            {product.title}
          </div> 
          </>) :
          (<></>) }
          <hr className='mt-4 w-[75%] m-auto' />
          <div className="pattern-details__content-actions">
            <button
              onClick={ () => addingItemToCart(product) } 
              className={`${!itemSelected || itemIsInToChart(product) ? 'pattern-details__content-actions-button_disabled': 'pattern-details__content-actions-button'} `}
              disabled={!itemSelected || itemIsInToChart(product)}> { itemIsInToChart(product) ? 'Added to Cart': 'Add Cart' } </button>
            <button
              className={`${itemSelected? 'pattern-details__content-actions-button': 'pattern-details__content-actions-button_disabled'} `}
              disabled={!itemSelected}> Buy now </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PatternDetails;