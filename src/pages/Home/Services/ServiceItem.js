import React from "react";
import { Link } from "react-router-dom";

const ServiceItem = ({ service }) => {
    const { _id, img, price, title, rating, description } = service;
    return (
        <div className="card card-compact justify-center w-100 bg-base-100 shadow-xl">
            <figure>
                <img src={img} alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className="">{description.substring(0, 100) + " ..."}</p>
                <p className="text-2xl text-orange-400 font-semibold">
                    Price: ${price}
                </p>
                <p className="text-2xl text-orange-400 font-semibold">
                    Rating: {rating}
                </p>
                <div className="card-actions justify-center">
                    <Link className="w-full" to={`/services/${_id}`}>
                        <p className="btn text-white btn-success hover:bg-orange-400 w-full">
                            View Details
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceItem;
