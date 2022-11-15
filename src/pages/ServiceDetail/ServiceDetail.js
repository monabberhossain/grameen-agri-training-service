import React, { useContext } from "react";
import { FaUser } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const ServiceDetail = () => {
    const { _id, img, price, title, rating, description } = useLoaderData();
    const { user } = useContext(AuthContext);
    console.log(user);

    const handleSubmitReview = (event) => {
        event.preventDefault();
        const form = event.target;
        const text = form.review.value;

        const review = {
            service: _id,
            serviceName: title,
            user: user.name,
            email: user.email,
            text,
        };

        // if(phone.length < 10){
        //     alert('Phone number should be 10 characters or longer')
        // }
        // else{

        // }

        fetch("http://localhost:5000/reviews", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(review),
        })
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
                    <img src={img} alt="Shoes" />
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
                <div className="border rounded-lg p-10">
                    <div className="flex justify-between items-center mb-5 p-2">
                        <div className="flex items-center">
                            <div>
                                {user?.photoURL ? (
                                    <img
                                        className="rounded-lg"
                                        style={{ height: "30px" }}
                                        src={user.photoURL}
                                        alt=""
                                    ></img>
                                ) : (
                                    <FaUser className="text-lg"></FaUser>
                                )}
                            </div>
                            <p className="ml-2">
                                {user?.displayName
                                    ? user.displayName
                                    : user.name}
                            </p>
                        </div>
                        <div>
                            <p>Rating: 4.5</p>
                        </div>
                    </div>
                    <div>
                        <p className="bg-slate-100 p-2 rounded">
                            Review texts will goes here
                        </p>
                    </div>
                </div>
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
