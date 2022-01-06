import React from 'react';
import SwiperCore, {
    Autoplay,Pagination,Navigation
  } from 'swiper';
import { Button } from '@material-ui/core';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"

import "../Carousel.css";
SwiperCore.use([Autoplay,Pagination,Navigation]);

function Carousel() {
    return (
        <Swiper style={{height:"600px",width:"600%",marginBottom:"40px"}} spaceBetween={30} centeredSlides={true} autoplay={{
            "delay": 2500,
            "disableOnInteraction": false
          }} pagination={{
            "clickable": true
          }} navigation={true} className="mySwiper">
            <SwiperSlide >      <Button ><a href="https://www.w3schools.com"><img src='https://a10.gaanacdn.com/gn_img/showcase/JD2KJyAbOL/JD2KJyAbOL/size_l_1641385352.webp'></img></a></Button>
       </SwiperSlide>
       <SwiperSlide> <Button ><a href="https://www.w3schools.com"><img src='https://a10.gaanacdn.com/gn_img/showcase/0wrb4qNKLg/0wrb45AKLg/size_l_1641385128.webp'></img></a></Button></SwiperSlide><SwiperSlide> <Button ><a href="https://www.w3schools.com"><img src='https://a10.gaanacdn.com/gn_img/showcase/ogNWkDbmXJ/gNWkE2vKmX/size_l_1641351809.webp'></img></a></Button></SwiperSlide><SwiperSlide> <Button ><a href="https://www.w3schools.com"><img src='https://a10.gaanacdn.com/gn_img/showcase/koMWQBbqLE/oMWQ4q43qL/size_l_1619805895.webp'></img></a></Button></SwiperSlide><SwiperSlide> <Button ><a href="https://www.w3schools.com"><img src='https://a10.gaanacdn.com/gn_img/showcase/ogNWkDbmXJ/ogNWkdjbmX/size_l_1631290833.webp'></img></a></Button></SwiperSlide><SwiperSlide> <Button ><a href="https://www.w3schools.com"><img src='https://a10.gaanacdn.com/gn_img/showcase/mGjKrP1W6z/GjKrnmmK6z/size_l_1641389499.webp'></img></a></Button></SwiperSlide>
            </Swiper>
    )
}

export default Carousel
