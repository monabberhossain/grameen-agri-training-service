import React, { useContext, useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import Review from "./Review";

const ServiceDetail = () => {
    const { _id, img, price, title, rating, description } = useLoaderData();
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState(null);

    useEffect(() => {
        fetch("https://grameen-agri-training-service-server.vercel.app/reviews")
            .then((res) => res.json())
            .then((data) => setReviews(data));
    }, []);

    const handleSubmitReview = (event) => {
        event.preventDefault();
        const form = event.target;
        const text = form.review.value;

        const review = {
            serviceId: _id,
            serviceName: title,
            userName: user.displayName,
            email: user.email,
            text,
        };

        fetch(
            "https://grameen-agri-training-service-server.vercel.app/reviews",
            {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(review),
            }
        )
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.acknowledged) {
                    alert("Review submitted successfully");
                    form.reset();
                }
            })
            .catch((er) => console.error(er));
    };
    return (
        <div>
            <h2 className="text-4xl font-semibold my-10">Service Details:</h2>
            <div className="card card-compact justify-center w-100 bg-base-100 shadow-xl p-10 mb-16">
                <figure>
                    <img src={img} alt="" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p className="">{description}</p>
                    <p className="text-2xl text-orange-400 font-semibold">
                        Price: ${price}
                    </p>
                    <p className="text-2xl text-orange-400 font-semibold">
                        Rating: {rating}
                    </p>
                </div>
            </div>
            <div>
                <h3 className="text-4xl font-semibold mt-10 mb-6">
                    Service Reviews:
                </h3>
                {reviews.map((review) => (
                    <Review key={review._id} review={review}></Review>
                ))}
            </div>
            <form className="my-10" onSubmit={handleSubmitReview}>
                <h4 className="text-2xl">Write your review here: </h4>
                <textarea
                    name="review"
                    className="textarea textarea-bordered h-24 w-full"
                    placeholder="Your Review"
                    required
                ></textarea>

                <input
                    className="btn text-white btn-success hover:bg-orange-400"
                    type="submit"
                    value="Submit"
                />
            </form>
        </div>
    );
};

export default ServiceDetail;
