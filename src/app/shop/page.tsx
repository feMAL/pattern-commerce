"use client"
import Shop from '@/components/Shop';
import React from 'react'
import { usePathname, useSearchParams } from 'next/navigation'


const ShopPage = () => {

  const params = useSearchParams();

  return (
    <Shop search={params.get('search') as string} />
  )
}

export default ShopPage