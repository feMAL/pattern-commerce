import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='flex flex-col text-black-100 shadow bg-slate-50 border-gray-100'>
        <div className="flex md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
           <div className='flex flex-col items-start gap-6'>
            <Image src="./next.svg" alt="logo" width={118} height={18} className='object-contain'></Image>
            <p className='text-base text-gray-700'>
                Paz Patterns 2024 <br />
                All rigths reserved &copy;
            </p>
            </div>  
            <div className='flex justify-end gap-6'>
            <Image src="/pintrest-icon.svg" alt="pintrest-icon" width={45} height={45} className='object-contain'></Image>
            <Image src="/instagram-icon.jpeg" alt="instagram-icon" width={55} height={55} className='object-contain'></Image>

            </div>  
        </div>
    </footer>
  )
}

export default Footer