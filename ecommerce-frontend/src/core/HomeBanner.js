import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import banner1 from '../img/banner1.jpeg';
import banner2 from '../img/banner2.jpeg';
import banner4 from '../img/banner4.jpeg';
import banner5 from '../img/banner5.jpeg';
 


const Gallery = () => {
  const handleOnDragStart = e => e.preventDefault()
  return (
    <AliceCarousel mouseDragEnabled >
      <img src={banner1} onDragStart={handleOnDragStart} className="yours-custom-class" />
      <img src={banner2} onDragStart={handleOnDragStart} className="yours-custom-class" />
      <img src={banner4} onDragStart={handleOnDragStart} className="yours-custom-class" />
      <img src={banner5} onDragStart={handleOnDragStart} className="yours-custom-class" />
    </AliceCarousel>
  )
}

export default Gallery;