
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
  <SwiperSlide> <Button ><a className="link" href="https://www.w3schools.com"><img src='https://a10.gaanacdn.com/gn_pl_img/playlists/Dk9KNk23Bx/9KN6MoMoKB/size_m_1639378777.webp'></img><h4  >Featuring Vicky Kaushal</h4></a></Button></SwiperSlide><SwiperSlide><Button ><a className="link" href="https://www.w3schools.com"><img src='https://a10.gaanacdn.com/gn_pl_img/playlists/XYybzNrb2g/Yybz0XGE32/size_m_1628652460.webp'></img><h4  >Best hits of Alia Bhatt</h4></a></Button></SwiperSlide><SwiperSlide><Button ><a className="link" href="https://www.w3schools.com"><img src='https://a10.gaanacdn.com/gn_pl_img/playlists/kGxbnw0Ky4/GxbnA5aWy4/size_m_1628651413.webp'></img><h4  >Best hits of Akshay Kumar</h4></a></Button></SwiperSlide><SwiperSlide><Button ><a className="link"href="https://www.w3schools.com"><img src='https://a10.gaanacdn.com/gn_pl_img/playlists/01A3mrWNQX/1A3mZxJeWN/size_m_1628652011.webp'></img><h4>Best hits of Shahid Kapoor</h4></a></Button></SwiperSlide><SwiperSlide><Button ><a className="link" href="https://www.w3schools.com"><img src='https://a10.gaanacdn.com/gn_pl_img/playlists/NOXWVgbkqL/OXWV59eL3k/size_m_1628653069.webp'></img><h4>Best hits of Ranbir Kapoor</h4></a></Button></SwiperSlide><SwiperSlide><Button ><a className="link" href="https://www.w3schools.com"><img src='https://a10.gaanacdn.com/gn_pl_img/playlists/7rVW1Rbk56/rVW1DLmg3k/size_m_1628653013.webp'></img><h4>BEST HITS OF PARINNEETI CHOPRA</h4></a></Button></SwiperSlide>
  </Swiper>
    </>
  )
}
