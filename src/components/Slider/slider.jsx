import React, {useContext} from "react";
import "./slider.css";
import {Link} from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import Ctx from "../../Ctx";
import "swiper/css/bundle";
import "swiper/css/scrollbar"
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-cards";

import "swiper/swiper-bundle.min.css";


import {EffectCreative} from "swiper";
import Card from "../Card/Card";
export default ({data}) => {
    const {visiblePosts} = useContext(Ctx);
   console.log(visiblePosts);
    return <>
    
     {/* <div className="wrapp"> */}
        <Swiper
        grabCursor={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        modules={[EffectCreative]}
        className="mySwiper"
      >
      
                        {visiblePosts.map((el, i) =>(
                        <SwiperSlide key={el._id}>
                        <Link to={`/posts/${el._id}`} key={el._id}>
                             <Card key={"card_" + i} {...el} />
                         </Link>
                         </SwiperSlide>
                        ))}
                  
        
      </Swiper>
    
      {/* </div> */}
    </>
}



