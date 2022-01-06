
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"

import "../Carousel.css";



// import Swiper core and required modules
import SwiperCore, {
  Pagination,Navigation
} from 'swiper';
import { Button } from "@material-ui/core";

// install Swiper modules
SwiperCore.use([Pagination,Navigation]);


export default function App() {
  
  
  
  return (
    <>
    
    <Swiper style={{height:"400px",width:"600%",marginBottom:"40px"}} slidesPerView={5} spaceBetween={30} slidesPerGroup={3} loop={false} loopFillGroupWithBlank={true} pagination={{
  "clickable": true
}} navigation={true} className="mySwiper">
  <SwiperSlide> <Button ><a className="link" href="https://www.w3schools.com"><img src='https://a10.gaanacdn.com/gn_img/albums/JD2KJAbOLw/2KJyNVRNbO/size_m.jpg'></img><h4  >Dance Mere Rani</h4></a></Button></SwiperSlide><SwiperSlide><Button ><a className="link" href="https://www.w3schools.com"><img src='https://a10.gaanacdn.com/gn_img/albums/DwPKOxB3qV/PKOxqPQa3q/size_m.jpg'></img><h4  >What Ve</h4></a></Button></SwiperSlide><SwiperSlide><Button ><a className="link" href="https://www.w3schools.com"><img src='https://a10.gaanacdn.com/gn_img/albums/MmqK5pEbwR/qK5pmMdEbw/size_m_1637318611.webp'></img><h4  >Easy On Me</h4></a></Button></SwiperSlide><SwiperSlide><Button ><a className="link"href="https://www.w3schools.com"><img src='https://a10.gaanacdn.com/gn_img/albums/R7vKX6WmrP/7vKXAym63m/size_m.webp'></img><h4>Love Nwaniti</h4></a></Button></SwiperSlide><SwiperSlide><Button ><a className="link" href="https://www.w3schools.com"><img src='https://a10.gaanacdn.com/gn_img/song/7rVW1aRWk5/VW1LG9Bg3k/size_m_1639457383.webp'></img><h4>Srivalli</h4></a></Button></SwiperSlide><SwiperSlide><Button ><a className="link" href="https://www.w3schools.com"><img src='https://a10.gaanacdn.com/gn_img/song/lJvKa16KDV/vKa9BxOXKD/size_m_1638938965.webp'></img><h4>Soch Liya</h4></a></Button></SwiperSlide>
  </Swiper>
    </>
  )
}
