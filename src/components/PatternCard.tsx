"use client"
import React from 'react'
import Image from 'next/image'
import { PatternCardProp } from '../types'
import Link from 'next/link'
import '@/styles/tooltip.css'

const PatternCard = ({ pattern }: PatternCardProp) => {

  return (
      <Link key={`patternCardLink_${pattern.id}`} href={`/product/${pattern.id}`}>
        <div className='pattern-card '>
          <div className='block justify-center items-center'>
            <div className='relative w-[100%] h-auto my-2 object-contain'>
              <Image src={pattern.image} alt={pattern.name} width={450} height={450} priority className=' object-contain' ></Image>
            </div>

            <div className='pattern-card__content w-full block text-center items-center'>
              <span className='pattern-card__content-title '> {`${pattern.isExclusive? '[Exclusive]': '[Non-Exclusive]'}`} - { pattern.title} </span>
              <div className='w-full justify-between'>
                <span>$</span> <span>{pattern.price}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
  )
}

export default PatternCard;