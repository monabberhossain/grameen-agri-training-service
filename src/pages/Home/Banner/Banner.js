import React from "react";
import img1 from "../../../assets/images/sliders/slider1.jpg";
import img2 from "../../../assets/images/sliders/slider2.jpg";
import img3 from "../../../assets/images/sliders/slider3.jpg";
import BannerItem from "./BannerItem";

const Banner = () => {
    const bannerData = [
        {
            image: img1,
            id: 1,
            prev: 4,
            next: 2,
        },
        {
            image: img2,
            id: 2,
            prev: 1,
            next: 3,
        },
        {
            image: img3,
            id: 3,
            prev: 2,
            next: 4,
        },
    ];
    return (
        <div className="carousel w-full py-12">
            {
                bannerData.map(slide => <BannerItem
                    key={slide.id}
                    slide={slide}
                ></BannerItem>)
            }            
        </div>
    );
};

export default Banner;
