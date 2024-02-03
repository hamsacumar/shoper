import React from 'react'
import Hero from '../Hero/Hero'
import Popular from '../components/Popular/Popular'
import Offers from '../components/Offers/Offers'
import NewCollection from '../components/NewCollection/NewCollection'
import NewsLetters from '../components/NewsLetter/NewsLetters'

const Shop = () => {
  return (
    <div>
        <Hero/>
        <Popular/>
        <Offers/>
        <NewCollection/>
        <NewsLetters/>
    </div>
  )
}

export default Shop