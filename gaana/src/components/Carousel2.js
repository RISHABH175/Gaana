
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
  <SwiperSlide > <Button ><a className="link" href="https://www.w3schools.com"><img className="img1" src='https://a10.gaanacdn.com/gn_img/artists/Dk9KNk23Bx/k9KNqJJbBx/size_m_1638898900.webp'></img><h4  >Arjit Singh</h4></a></Button></SwiperSlide><SwiperSlide><Button ><a className="link" href="https://www.w3schools.com"><img className="img1"  src='https://a10.gaanacdn.com/gn_img/artists/Rz4W87v3xD/Rz4W8ppWxD/size_m_1638817418.webp'></img><h4  >Neha Kakkar</h4></a></Button></SwiperSlide><SwiperSlide><Button ><a className="link" href="https://www.w3schools.com"><img className="img1"  src='https://a10.gaanacdn.com/gn_img/artists/w4MKPDOKoj/4MKPgoQgbo/size_m_1516802409.webp'></img><h4  >Yo YO HONEY SINGH</h4></a></Button></SwiperSlide><SwiperSlide><Button ><a className="link"href="https://www.w3schools.com"><img className="img1"  src='https://a10.gaanacdn.com/gn_img/artists/ZaP37OR3Dy/ZaP37lBWDy/size_m_1516796833.webp'></img><h4>Lata Mangeshkar</h4></a></Button></SwiperSlide><SwiperSlide><Button ><a className="link" href="https://www.w3schools.com"><img className="img1"  src='https://a10.gaanacdn.com/gn_img/artists/9MAWe7KyJe/MAWe9lBGWy/size_m_1516185303.webp'></img><h4>Badshah</h4></a></Button></SwiperSlide><SwiperSlide><Button ><a className="link" href="https://www.w3schools.com"><img className="img1"  src='https://a10.gaanacdn.com/gn_img/artists/zLp36PvbrG/Lp36AR0KrG/size_m_1516707336.webp'></img><h4>Pritam</h4></a></Button></SwiperSlide>
  </Swiper>
    </>
  )
}
