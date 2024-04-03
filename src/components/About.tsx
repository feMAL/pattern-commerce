import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div className='flex columns-2 my-12'>
        <div className='md:pl-20 p-5 ml-5 '> 
            <Image src={'/imagen.avif'} alt='person' className='rounded-full object-contain' width={500} height={200}></Image>
        </div>
        <div className='p-12 mx-5 font-extralight'>
            Hi! I'm EveS - freelance surface pattern designer from Vilnius, Lithuania. A successful IT project manager, that quitted everything to start a creative journey. Step by step, day by day and after 8 years of hard work I'm here - well known surface pattern designer, that works with fabric, clothing, stationery and wallpaper manufacturers. My works can be recognised by simple, but eye catching florals with a retro twist. Hope you'll find here something nice for your next project.
        </div>
    </div>
  )
}


export default About