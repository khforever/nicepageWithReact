import React from 'react'
import Header from '../../components/Header'
import HeroSection from '../../components/HeroSection'
import HotelBar from '../../components/HotelBar'
import CardsSection from '../../components/CardsSection'
 import DecoratingImg from '../../components/DecoratingImg'
 
const Home = () => {
  return (
   <>
   <Header />
   <HeroSection />
   <HotelBar />
   <CardsSection />
   <DecoratingImg />
   </>
  )
}

export default Home