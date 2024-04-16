"use client"

import { SearchBar } from '@/components';
import { useState } from 'react';
import PatternCard from '@/components/PatternCard';
import { CatalogPattern } from '@/types';
import { data } from '@/constants';
import { useFetchProducts } from '@/hooks/ProductsHook';
import '@/styles/loader.css';

export default function Shop() {

  const {products, isLoading} = useFetchProducts();
  const patterns: CatalogPattern[] = products;

  const patternGroups = data.map(categories => ({title: categories.title, link: categories.name }))

  return (
    <main className='flex-1 padding-x padding-y'>
    <div className='flex-auto md:mx-20 min-h-[75vh] justify-center pt-8'>
      {
        !isLoading ? (
          <>
            <SearchBar patternGroups={patternGroups}></SearchBar>
            <hr />
            {
              patterns.map((pattern,index) => (
                <div key={`${pattern.name}_${index}`} >
                  <h2
                    className='pt-8 pl-16 text-2xl font-serif font-bold capitalize'
                    id={`${pattern.name}_${index}`}>
                      <span className='capitalize'>
                        {pattern.description}
                      </span>
                  </h2>
                  <div className='home__patterns-wrapper -pl-20'>
                    {
                      pattern.products.map( (prod) => (
                        <PatternCard key={`${pattern.name}_${prod.pattern_identification}`}  pattern={prod}/>
                      ))
                    }
                </div>
                </div>
              ))
            }
          </> ) : <div className="loader"></div>
        }
    </div>
  </main> 
  )
}