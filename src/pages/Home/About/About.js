import React from "react";
import about from "../../../assets/images/aboutus/aboutus.jpg";

const About = () => {
    return (
        <div className="hero my-20">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-5">                    
                    <img
                        src={about}
                        alt=""
                        className="border-8 rounded-lg shadow-2xl"
                    />
                </div>
                <div className="w-1/2">
                    <p className="text-2xl font-bold text-orange-700">
                        About Us
                    </p>
                    <h1 className="text-5xl font-bold">
                        We are qualified <br />
                        & 10 years of experience <br />
                        in this field
                    </h1>
                    <p className="pt-6">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable.
                    </p>
                    <p className="py-6">
                        the majority have suffered alteration in some form, by
                        injected humour, or randomised words which don't look
                        even slightly believable.
                    </p>
                    <button className="btn text-white btn-success hover:bg-orange-400">
                        Get More Info
                    </button>
                </div>
            </div>
        </div>
    );
};

export default About;
