import React from "react";
import {
    FaFileSignature,
    FaPeopleCarry,
    FaPhone,
    FaStreetView,
} from "react-icons/fa";
import feature from "../../../assets/images/feature/feature.jpg";

const Features = () => {
    return (
        <div className="overflow-y-hidden py-12">
            <div className="xl:mx-auto xl:container xl:px-20 md:px-6 px-4 py-12">
                <div className="lg:flex items-center justify-center lg:space-x-12 2xl:space-x-6">
                    <div className>
                        <p className="lg:text-4xl text-3xl font-extrabold leading-9 text-gray-800">
                            Trained with me on field
                        </p>
                        <p className="text-lg leading-7 text-gray-600 mt-4 xl:w-7/12 w-full">
                            Whether article spirits new her covered hastily
                            sitting her. Money witty books nor son add
                        </p>
                        <div className="mt-6 md:mt-10 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 lg:mt-6 2xl:mt-12">
                            <div className="flex items-center">
                                <div className="w-16 h-16 relative">
                                    <div className=" flex-shrink-0 z-20 bg-success text-white rounded-md shadow-xl w-16 h-16 flex items-center justify-center mt-2 mr-3">
                                        <FaFileSignature className="font-bold text-2xl"></FaFileSignature>
                                    </div>
                                </div>
                                <div className="flex items-start flex-col ml-6 pt-8">
                                    <h2 className="text-lg font-semibold leading-4 text-gray-800">
                                        Theoretical Class
                                    </h2>
                                    <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">
                                        Whether article spirits new her covered.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="w-16 h-16 relative">
                                    <div className=" flex-shrink-0 z-20 bg-success text-white rounded-md shadow-xl w-16 h-16 flex items-center justify-center mt-2 mr-3">
                                        <FaPeopleCarry className="font-bold text-2xl"></FaPeopleCarry>
                                    </div>
                                </div>
                                <div className="flex items-start flex-col ml-6 pt-8">
                                    <h2 className="text-lg font-semibold leading-4 text-gray-800">
                                        Practical Class
                                    </h2>
                                    <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">
                                        Whether article spirits new her covered.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="w-16 h-16 relative">
                                    <div className=" flex-shrink-0 z-20 bg-success text-white rounded-md shadow-xl w-16 h-16 flex items-center justify-center mt-2 mr-3">
                                        <FaStreetView className="font-bold text-2xl"></FaStreetView>
                                    </div>
                                </div>
                                <div className="flex items-start flex-col ml-6 pt-8">
                                    <h2 className="text-lg font-semibold leading-4 text-gray-800">
                                        On Field Activities
                                    </h2>
                                    <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">
                                        Whether article spirits new her covered.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="w-16 h-16 relative">
                                    <div className=" flex-shrink-0 z-20 bg-success text-white rounded-md shadow-xl w-16 h-16 flex items-center justify-center mt-2 mr-3">
                                        <FaPhone className="font-bold text-2xl"></FaPhone>
                                    </div>
                                </div>
                                <div className="flex items-start flex-col ml-6 pt-8">
                                    <h2 className="text-lg font-semibold leading-4 text-gray-800">
                                        Supports on Calling
                                    </h2>
                                    <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">
                                        Whether article spirits new her covered.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hidden lg:block lg:w-3/5 xl:w-3/5 w-full ml-5 lg:mt-0 mt-6">
                        <img
                            src={feature}
                            alt="ongoing meeting"
                            className="w-full obejct-fit object-center object-fill h-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;
