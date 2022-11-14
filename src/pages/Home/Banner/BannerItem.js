import React from "react";
import { Link } from "react-router-dom";
import "./BannerItem.css";

const BannerItem = ({ slide }) => {
    const { image, text1, id, prev, next } = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className="banner-img">
                <img src={image} alt="" className="w-full rounded-xl" />
            </div>
            <div className="absolute flex transform -translate-y-1/2 left-20 top-1/3">
                <h1 className="text-7xl font-bold text-white">{text1}</h1>
            </div>
            <div
                style={{ top: "60%" }}
                className="absolute flex transform -translate-y-1/2 left-20"
            >
                <Link className="btn btn-outline text-orange-400 hover:bg-orange-400 mt-20">
                    Enroll To Courses
                </Link>
            </div>

            <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-1">
                <a
                    href={`#slide${prev}`}
                    className="btn btn-outline text-orange-400 hover:bg-orange-400 btn-circle mr-5"
                >
                    ❮
                </a>
                <a
                    href={`#slide${next}`}
                    className="btn btn-outline text-orange-400 hover:bg-orange-400 btn-circle"
                >
                    ❯
                </a>
            </div>
        </div>
    );
};

export default BannerItem;
