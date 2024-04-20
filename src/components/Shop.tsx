"use client"

import { SearchBar } from '@/components';
import { useContext, useEffect, useState } from 'react';
import PatternCard from '@/components/PatternCard';
import { CatalogPattern, ShopProps } from '@/types';
import { data } from '@/constants';
import '@/styles/loader.css';
import { ProductContext } from '@/context/products.context';

export default function Shop({search }: ShopProps) {


  const {products} = useContext(ProductContext);
  const [filter, setFilter] = useState("");

  const [filtredProducts, setFilterProducts] = useState<CatalogPattern[]>(products);
  
  let patterns: CatalogPattern[] = [...products];

  useEffect(()=> {
    patterns = [...products];

    patterns = patterns.filter((category) => category.products.filter((product) => !product.title.toLowerCase().includes(filter)).length < 1);

    setFilterProducts(patterns)

  },[products,filter]);

  const patternGroups = products.map(categories => ({title: categories.name, link: categories.description }))

  return (
    <main className='flex-1 padding-x padding-y'>
    <div className='flex-auto md:mx-20 min-h-[75vh] justify-center pt-8'>
      {
        products.length ? (
          <>
            <SearchBar patternGroups={patternGroups} filter={filter} setFilter={setFilter} ></SearchBar>
            <hr />
            {
              filtredProducts.map((pattern,index) => (
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