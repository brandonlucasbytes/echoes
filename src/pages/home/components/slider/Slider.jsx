import {
  WestOutlined,
  EastOutlined
} from '@mui/icons-material'
import { useState } from 'react'
import './slider.scss'

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const featuredImages = [
    "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];

  function back() {
    setCurrentSlide(currentSlide === 0 ? featuredImages.length - 1 : (prev) => prev - 1)
  }

  function next() {
    setCurrentSlide(currentSlide === featuredImages.length - 1 ? 0 : (prev) => prev + 1)
  }

  return (
    <div className="slider">
      <div 
        className="slide-container"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
        <img src={featuredImages[0]} alt="" />
        <img src={featuredImages[1]} alt="" />
        <img src={featuredImages[2]} alt="" />
      </div>
      <div className="icons">
        <div className="icon" onClick={back}>
          <WestOutlined />
        </div>
        <div className="icon" onClick={next}>
          <EastOutlined />
        </div>
      </div>
    </div>
  )
}

export default Slider
