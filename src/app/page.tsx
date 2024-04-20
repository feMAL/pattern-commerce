"use client"

import { HomeSection, SearchBar, Slider } from '@/components';

export default function Home() {
  return (
    <div className='pt-16'>
      <Slider></Slider>
      {
        //<SearchBar patternGroups={[]}></SearchBar>
      }
      <HomeSection></HomeSection>
    </div>
  )
}
