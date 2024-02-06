import React, { useContext } from 'react'
import Image from 'next/image'
import { CartItem, Pattern, PatternCardProp } from '../types'
import Link from 'next/link'
import { CartContext } from '@/context/cart.context'

const PatternCard = ({ pattern }: PatternCardProp) => {

  const {addItem} = useContext(CartContext);

  const patternToItemCart  = (pattern: Pattern): CartItem => {
    const cartItem: CartItem = {
      item_id: pattern.id,
      description: pattern.title,
      price: pattern.price,
      small_img: pattern.image
    }
    return cartItem; 
  }

  return (
    <div className='pattern-card m-2 group'>
        <div className='relative w-full md:h-60 h-96 my-2 object-contain'>
          <Image src={pattern.image} alt={pattern.name} fill priority className='object-contain' ></Image>
        </div>

        <div className='pattern-card__content w-full block text-center items-center'>
          <span className='pattern-card__content-title '> { pattern.title} </span>
          <div className='w-full justify-between'>
            <p>{pattern.description}</p>
            <span>$</span> <span>{pattern.price}</span>
            <button className='mt-2 w-full  bg-slate-200 font-sans text-slate-700 rounded hover:bg-slate-50 hover:border hover:shadow'>
              <Link key={`patternCardLink_${pattern.id}`} href={`/product/${pattern.id}`}>See more</Link>
            </button>
            <button
              onClick={ ()=> addItem(patternToItemCart(pattern)) } 
              className='mt-2 w-full  bg-slate-200 font-sans text-slate-700 rounded hover:bg-slate-50 hover:border hover:shadow'>
              Add Cart
            </button>
          </div>
        </div>

    </div>
  )
}

export default PatternCard;