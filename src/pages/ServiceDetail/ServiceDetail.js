import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const ServiceDetail = () => {
    const { _id, img, price, title, rating, description } = useLoaderData();
    const { user } = useContext(AuthContext);

    const handlePlaceOrder = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || "unregistered";
        const phone = form.phone.value;
        const message = form.message.value;

        const order = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            phone,
            message,
        };

        // if(phone.length < 10){
        //     alert('Phone number should be 10 characters or longer')
        // }
        // else{

        // }

        fetch("http://localhost:5000/orders", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(order),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.acknowledged) {
                    alert("Order placed successfully");
                    form.reset();
                }
            })
            .catch((er) => console.error(er));
    };
    return (
        <div>
            <div className="card card-compact justify-center w-100 bg-base-100 shadow-xl">
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
                    <div className="card-actions justify-center">
                        <Link className="w-full" to={`/service/${_id}`}>
                            <p className="btn text-white btn-success hover:bg-orange-400 w-full">
                                View Details
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
            <form onSubmit={handlePlaceOrder}>
                <h2 className="text-4xl">You are about to order: {title}</h2>
                <h4 className="text-3xl">Price: {price}</h4>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <input
                        name="firstName"
                        type="text"
                        placeholder="First Name"
                        className="input input-ghost w-full  input-bordered"
                    />
                    <input
                        name="lastName"
                        type="text"
                        placeholder="Last Name"
                        className="input input-ghost w-full  input-bordered"
                    />
                    <input
                        name="phone"
                        type="text"
                        placeholder="Your Phone"
                        className="input input-ghost w-full  input-bordered"
                        required
                    />
                    <input
                        name="email"
                        type="text"
                        placeholder="Your email"
                        defaultValue={user?.email}
                        className="input input-ghost w-full  input-bordered"
                        readOnly
                    />
                </div>
                <textarea
                    name="message"
                    className="textarea textarea-bordered h-24 w-full"
                    placeholder="Your Message"
                    required
                ></textarea>

                <input className="btn" type="submit" value="Place Your Order" />
            </form>
        </div>
    );
};

export default ServiceDetail;
