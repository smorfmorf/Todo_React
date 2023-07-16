import React from "react";
import { BsCheckLg } from "react-icons/bs";

const Check = ({ isCompleted }) => {
    return (
        <div
            className={`border-2 rounded-lg border-pink-400 ${
                isCompleted ? "bg-pink-400" : ""
            } w-5 h-5 mr-3 flex items-center`}
        >
            {isCompleted && <BsCheckLg size={24} className="text-gray-900" />}
        </div>
    );
};

export default Check;
