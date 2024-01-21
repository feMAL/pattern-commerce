import { CartItemProps } from '@/types'
import React from 'react'
import Image from 'next/image';

const CartItem = ({ item } : CartItemProps) => {
  return (
    <div className='grid grid-cols-4 w-full my-8'>
        <div className='col flex justify-center'>
            <div className='object-contain'>
                <Image src={`${item.small_img}`} alt={`${item.description}`} width={100} height={30} className='object-contain'/>
            </div>
        </div>
        <div className='col'>
            {item.description}
        </div>
        <div className='col'>
            $ {item.price}
        </div>
        <div className='col'>
            <div className='flex justify-center'>
                <button className='hover:text-rose-300 rounded-full h-8 w-8 hover:shadow-md'>
                    <svg data-slot="icon" fill="none" strokeWidth={1.5} className='ml-1 object-contain' width={25} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
  )
}

export default CartItem