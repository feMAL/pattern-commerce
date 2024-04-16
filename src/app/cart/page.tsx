import dynamic from 'next/dynamic'
import React from 'react'

const Cart = dynamic(() => import('../../components/Cart'), { ssr: false })


const CartPage = () => {
  return (
    <div className='flex w-full min-h-full pt-20 justify-center'>
        <Cart></Cart>
    </div>
  )
}

export default CartPage