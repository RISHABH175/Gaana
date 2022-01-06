
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"



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
  <SwiperSlide > <Button ><a className="link" href="https://www.w3schools.com"><img className="img1" src='https://a10.gaanacdn.com/gn_img/m_radio_circle/w4MKPObojg/w4MKPObojg/size_m_1563783532.webp'></img><h4  >Club Mirchi Radio</h4></a></Button></SwiperSlide><SwiperSlide><Button ><a className="link" href="https://www.w3schools.com"><img className="img1"  src='https://a10.gaanacdn.com/gn_img/g_radio_circle/4Z9bqo3yQn/4Z9bqmJbyQ/size_m_1563778936.webp'></img><h4  >Party Hits</h4></a></Button></SwiperSlide><SwiperSlide><Button ><a className="link" href="https://www.w3schools.com"><img className="img1"  src='https://a10.gaanacdn.com/gn_img/g_radio_circle/21GWwrR3pk/21GWwe4Kpk/size_m_1588760360.webp'></img><h4  >Happy Feels</h4></a></Button></SwiperSlide><SwiperSlide><Button ><a className="link"href="https://www.w3schools.com"><img className="img1"  src='https://a10.gaanacdn.com/gn_img/m_radio_circle/Bp1bAnK029/Bp1bAnK029/size_m_1637922143.webp'></img><h4>Mirchi Campus</h4></a></Button></SwiperSlide><SwiperSlide><Button ><a className="link" href="https://www.w3schools.com"><img className="img1"  src='https://a10.gaanacdn.com/gn_img/g_radio_circle/10q3ZR1352/10q3Zm2K52/size_m_1563778678.webp'></img><h4>Morning Radio</h4></a></Button></SwiperSlide><SwiperSlide><Button ><a className="link" href="https://www.w3schools.com"><img className="img1"  src='https://a10.gaanacdn.com/gn_img/g_radio_circle/a7LWBkzbzX/a7LWBwkbzX/size_m_1567583320.webp'></img><h4>Chill Music</h4></a></Button></SwiperSlide>
  </Swiper>
    </>
  )
}
