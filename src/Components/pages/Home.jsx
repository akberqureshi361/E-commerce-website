import React from 'react';
import HomeCarousel from '../HomeCarousel/HomeCarousel';
import HomeSectionCarousel from '../HomeSectionCarousel/HomeSectionCarousel';

function Home() {
  return (
    <div>
    <HomeCarousel/>
    
    <div className=' py-20 space-y-10 flex flex-col justify-center px-10'>
        <HomeSectionCarousel/>
        <HomeSectionCarousel/>
        <HomeSectionCarousel/>
        <HomeSectionCarousel/>
        <HomeSectionCarousel/>
        <HomeSectionCarousel/>
      
        </div>
    
    </div>
    
  )
}

export default Home