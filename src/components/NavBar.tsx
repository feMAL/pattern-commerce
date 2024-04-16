"use client"

import { CartContext } from '@/context/cart.context';
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useContext, useEffect, useState } from 'react'

const NavBar = () => {

  const path = usePathname();

  const [menuAble, setMenuAble] = useState(false);
  const name = 'Paz Patterns'

  const { cart } = useContext(CartContext);

  useEffect(()=> {
    window.localStorage.setItem('cart',JSON.stringify(cart));
  },[cart])

  return (
    <header className='w-full absolute z-10 shadow'>
        <nav className='hidden md:flex h-20 justify-between items-center bg-white'>
            <Link href={"/"} className='mx-20'>
                <span className='text-bold font-bold size-10'>
                  {name}
                </span>
            </Link>
            
            <div className='flex items-center'>
              <ul>
                <li className='inline px-8 transition-colors hover:text-rose-400' key="catalog">
                  <Link href={'/shop'} className={path == "/shop" ? "navbar__link-active" : ""}>
                    <span>
                      Shop
                    </span>
                  </Link>
                </li>
                <li className='inline px-8 transition-colors hover:text-rose-400' key="contactus">
                  <Link href={'/contact'} className={path == "/contact" ? "navbar__link-active" : ""}>
                    <span>
                      Contact
                    </span>
                  </Link>
                </li>
                <li className='inline px-8 transition-colors hover:text-rose-400' key="about">
                  <Link href={'/about'} className={path == "/about" ? "navbar__link-active" : ""}>
                    <span>
                      About Me
                    </span>
                  </Link>
                </li>
              </ul>
              <div className='mx-20'>
                  <Link href={'/cart'}>
                    <button className='navbar__button-cart'>
                      <svg data-slot="icon" fill="none" className=' h-8 w-8 ml-2 border-l-slate-700  text-rose-300' strokeWidth={1.5} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                      </svg>
                      <span className='absolute text-[13px] bg-red-600 h-[18px] w-[18px] rounded-full place-items-center text-white'>{cart.length}</span>
                    </button>
                  </Link>
                <button title="Sing In" className='navbar__button-login'>
                  <svg data-slot="icon" className={`hover:text-rose-400 -m-4 -ml-2 hover:-ml-[9px] h-8 w-8`} fill="none" strokeWidth={1.5} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                </button>
              </div>
            </div>
        </nav>
        <nav className='md:hidden h-20 bg-white'>
            <div className='flex md:hidden pt-3 justify-between items-center'>
              <button onClick={()=> setMenuAble(!menuAble)} className='ml-8 rounded hover:shadow'>
                <svg data-slot="icon" className='h-8 w-8 text-slate-600' fill="none" strokeWidth={1.5} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
              <Link href={"/"} className='mx-20'>
                  <span className='text-bold font-extrabold size-10'>
                      {name}
                  </span>
              </Link>
              <div className='rounded'>
                  <button className='mr-8'>
                    <svg data-slot="icon" fill="none" className='h-8 w-8 text-slate-600' strokeWidth={1.5} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                  </button>
              </div>
            </div>

            <div className='items-center'>
              <ul className={`text-center mt-5 ${menuAble ? 'block' : 'hidden'} transition-transform`}>
                <li className='block rounded-md bg-slate-50 h-8 my-1 text-center transition-colors hover:bg-rose-200 hover:text-slate-50' key="home">
                  <Link href={'/'}>
                    <span>
                      Home
                    </span>
                  </Link>
                </li>
                <li className='block rounded-md bg-slate-50 my-1 h-8 text-center transition-colors hover:bg-rose-200 hover:text-slate-50' key="catalog">
                  <Link href={'/shop'}>
                    <span>
                      Shop
                    </span>
                  </Link>
                </li>
                <li className='block rounded-md bg-slate-50 my-1 h-8 text-center transition-colors  hover:bg-rose-200 hover:text-slate-50' key="contactus">
                  <Link href={'/contact'}>
                    <span>
                      Contact
                    </span>
                  </Link>
                </li>
              </ul>              
            </div>
        </nav>
    </header>
  )
}

export default NavBar