import React, { useEffect, useState } from "react";
import ServiceItem from "./ServiceItem";

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch(
            "https://grameen-agri-training-service-server.vercel.app/services"
        )
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);
    return (
        <div>
            <div className="text-center my-8">
                <p className="text-2xl font-bold text-orange-400">Services</p>
                <h2 className="text-5xl font-semibold">Our Service Area</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service) => (
                    <ServiceItem
                        key={service._id}
                        service={service}
                    ></ServiceItem>
                ))}
            </div>
        </div>
    );
};

export default Services;
