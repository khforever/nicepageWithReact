import React from 'react'
import homeImg from '/hero-section-img.png';
import Rectangle from '../Rectangle';
const HeroSection = () => {
  return (
    <div className="container h-dvh ">
        
<img src={homeImg} alt="Hero Section Image" className="mx-auto "/>

<div className="absolute flex  top-1/2 left-1/2">
<Rectangle />
</div>



    </div>
  )
}

export default HeroSection