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
      item_id: pattern.id,
      description:`${pattern.isExclusive? '[Exclusive]': '[Non-Exclusive]'} ${pattern.title} - ${itemSelected}` ,
      price: pattern.price,
      small_img: pattern.image
    }
    return cartItem; 
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
            <Image src={product.image} className='object-contain' alt={product.title} width={600} height={600} priority></Image>
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
            product.description? ( <>
          <hr className='mt-4 w-[75%] m-auto' />
          <div className="pattern-details__content-description">
            {product.description?.split(". ").map((paragraph)=> (<p key={paragraph}>{paragraph}</p>))}
          </div> 
          </>) :
          (<></>) }
          <hr className='mt-4 w-[75%] m-auto' />
          <div className="pattern-details__content-actions">
            <button
              onClick={ () => addingItemToCart(product) } 
              className={`${itemSelected? 'pattern-details__content-actions-button': 'pattern-details__content-actions-button_disabled'} `}
              disabled={!itemSelected}> Add Cart </button>
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