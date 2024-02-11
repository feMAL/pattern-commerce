"use client"

import Image from 'next/image';
import { Fragment, useContext } from 'react'; 
import React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { CartItem } from '.';
import Link from 'next/link';
import { CartContext } from '@/context/cart.context';

const Cart = () => {

    const {cart} = useContext(CartContext)

  return (
    <>
        <div className='my-12 md:w-[70%] w-[95%] min-h-full shadow-md'>
            <div className='py-16 justify-center text-center'>
                <div className='text-center'>
                    <span className='font-extrabold text-xl'>Your Buy s Cart</span>
                </div>
                <div className='grid grid-cols-4 w-full my-8'>
                    <div>
                        Product
                    </div>
                    <div>
                        Description
                    </div>
                    <div>
                        Price
                    </div>
                    <div>
                        Actions
                    </div>
                </div>
                <div>
                {
                    cart.length ? (
                    cart.map( (product) => (
                        <>
                            <div key={`cart_item_${product.item_id}`}  className='flex flex-col pt-8 items-center justify-center'>
                                <CartItem item={product}></CartItem>
                                <hr className='text-rose-400 w-[75%]' />
                            </div>
                        </>
                    ))
                    ): (
                    <div className='py-16 font-medium text-md'>
                        <span>
                            Your Cart is empty, get it something in the <Link href={"/shop"}><span className=' font-bold capitalize text-rose-400'>shop</span></Link> 
                        </span>
                    </div>
                    ) 
                }
                </div>

                <button className={`mt-16 bg-red-300 text-slate-50 rounded h-12 w-[80%] hover:shadow-md ${cart.length ? '': 'hidden'}`}>
                    CHECKOUT
                </button>
            </div>
        </div>
    </>
  )
}

export default Cart