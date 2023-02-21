import React, {useContext} from "react";

import Slider from "../components/Slider/slider"

import Ads from "../components/Ads/ads";
import {Link} from "react-router-dom";
import Ctx from "../Ctx"




export default ({data}) => {
    const {visiblePosts} = useContext(Ctx);

    return <>
        <h1>Коротко о главном....</h1>
        <Link to="/posts"><button className="btn">Перейти к постам</button> </Link>
        <Slider/>
         <Ads/>
    </>
}