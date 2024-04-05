"use client"
import React from 'react'
import Image from 'next/image'
import { useFetchAbout } from '@/hooks/AboutHook';

const About = () => {

  const {about, isLoading} = useFetchAbout('Paz');

  const {description, image} = about;

  return (
    <div className='flex columns-2 my-12'>
        <div className='md:pl-20 p-5 ml-5 '> 
            <Image src={'/'+image} alt='person' className='rounded-full object-contain' width={500} height={200}></Image>
        </div>
        <div className='p-12 mx-5 font-extralight'>
          {description}
        </div>
    </div>
  )
}


export default About