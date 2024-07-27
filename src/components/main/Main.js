import React from "react";
// import { Grid } from react-visual-grid;
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import badge from '../images/Badge.jpg';

export default function Main(){
    return (
        <div className="photo">
            <AliceCarousel autoPlay autoPlayInterval={3000} >
                <p><img alt="badge" src={badge} className="slidering"/></p>
                <p><img src={image2} className="slidering"/></p>
                <p><img src={image3} className="slidering"/></p>
                {/* <p><img src={image4} className="slidering"/></p>
                <p><img src={image6} className="slidering"/></p> */}
            </AliceCarousel>
            <h1 className="title"> OSoL Supplies</h1>
            <hr></hr>
            <p className="text">A platform design to help you find all the gadgets you need to be effective in your personal and professional life</p>
        </div>
    )
}