"use client" 
import React, { useEffect, useState } from 'react'
import { CatalogPattern, PatternGroupsProp } from '../types';
import Link from 'next/link';

const SearchBar = ({ patternGroups, setFilter, filter }: PatternGroupsProp ) => {

    function handleFilterCode ( strFilter: string ){

        setFilter(strFilter);

    }

  return (
    <div className='pt-16 pb-4'>
        <form className='searchbar'>
            <span className='searchbar__title'>Find your style and get your favorite patterns</span>
            <div className='w-full'>
                <input
                type="text"
                name="search"
                value={filter}
                onChange={(e) => handleFilterCode(e.target.value.toLowerCase())}
                placeholder='Flowers'
                className='searchbar__input'/>

                <svg data-slot="icon" fill="none" className='absolute inline w-8 h-8 -ml-12 mt-6 text-rose-300' strokeWidth={1.5} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
            </div>
        </form>
        <div className='searchbar__filters'>
            {
                patternGroups.map( (groups) => (
                    <Link key={`${groups.link}_${groups.title}`} href={`?search=${groups.link}`}>
                        <span className=' capitalize text-sm underline hover:text-pink-800'>
                            {groups.title}
                        </span>
                    </Link>
                ) )
            }
        </div>
    </div>
  )
}

export default SearchBar