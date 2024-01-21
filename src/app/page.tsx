"use client"

import { HomeSection, SearchBar, Slider } from '@/components';
import Image from 'next/image';
import {Cart} from '@/components'
import { useState } from 'react'


export default function Home() {
  return (
    <div className='pt-16'>
      <Slider></Slider>
      <SearchBar patternGroups={[]}></SearchBar>
      <HomeSection></HomeSection>
    </div>
  )
}
