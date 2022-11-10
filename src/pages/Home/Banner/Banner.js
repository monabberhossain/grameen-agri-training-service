import React from "react";
import img1 from "../../../assets/images/sliders/slider1.jpg";
import img2 from "../../../assets/images/sliders/slider2.jpg";
import img3 from "../../../assets/images/sliders/slider3.jpg";
import BannerItem from "./BannerItem";

const Banner = () => {
    const bannerData = [
        {
            image: img1,
            text1: (
                <>
                    Learn
                    <br />
                    Harvesting
                    <br />
                    In A Proper Way
                    <br />
                    At Proper Time
                </>
            ),
            id: 1,
            prev: 3,
            next: 2,
        },
        {
            image: img2,
            text1: (
                <>
                    Ecosystem
                    <br />
                    Approach to
                    <br />
                    Fisheries:
                    <br />
                    An Introduction
                </>
            ),
            id: 2,
            prev: 1,
            next: 3,
        },
        {
            image: img3,
            text1: (
                <>
                    Cattles &
                    <br />
                    Birds
                    <br />
                    Husbandry
                    <br/>
                    Training
                </>
            ),
            id: 3,
            prev: 2,
            next: 1,
        },
    ];
    return (
        <div className="carousel w-full py-12">
            {bannerData.map((slide) => (
                <BannerItem key={slide.id} slide={slide}></BannerItem>
            ))}
        </div>
    );
};

export default Banner;
