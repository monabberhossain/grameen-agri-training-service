import React from "react";
import { Link } from "react-router-dom";
import "./BannerItem.css";

const BannerItem = ({ slide }) => {
    const { image, id, prev, next } = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className="banner-img">
                <img src={image} alt="" className="w-full rounded-xl" />
            </div>
            <div className="absolute flex transform -translate-y-1/2 left-20 top-1/3">
                <h1 className="text-7xl font-bold text-white">
                    Affordable <br />
                    Price for Car <br />
                    Servicing
                </h1>
            </div>
            <div className="absolute flex transform -translate-y-1/2 left-20 top-1/2">
                <p className="text-xl font-semibold text-white">
                    There are many variations of passages of available, but the
                </p>
            </div>
            <div className="absolute flex transform -translate-y-1/2 left-20 top-2/3">
                <Link className="btn btn-outline btn-warning">Appointment</Link>
                <Link className="btn btn-outline btn-warning">Appointment</Link>
            </div>

            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-1">
                <a href={`#slide${prev}`} className="btn btn-circle mr-5">
                    ❮
                </a>
                <a href={`#slide${next}`} className="btn btn-circle">
                    ❯
                </a>
            </div>
        </div>
    );
};

export default BannerItem;
