import Cards from '@/components/cards-and-more/Cards'
import MainCarousel from '@/components/carousel/MainCarousel'
import React from 'react'

export default function Home() {
  return (
    <div>
      <div className='pt-9'>
        <MainCarousel/>
      </div>
      <div className='pt-2'>
        <Cards/>
      </div>
  </div>
  )
}
