import React from "react";
import { FaUser } from "react-icons/fa";

const Review = ({ review }) => {
    const { userName, text } = review;
    return (
        <div className="border rounded-lg p-10">
            <div className="flex justify-between items-center mb-5 p-2">
                <div className="flex items-center">
                    <div>
                        <FaUser className="text-lg"></FaUser>
                    </div>
                    <p className="ml-2">{userName}</p>
                </div>
                <div>
                    <p>Rating: 4.5</p>
                </div>
            </div>
            <div>
                <p className="bg-slate-100 p-2 rounded">{text}</p>
            </div>
        </div>
    );
};

export default Review;
