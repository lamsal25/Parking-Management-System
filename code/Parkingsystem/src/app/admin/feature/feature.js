import React from "react";

export default function Featurecard({ text }) {
    return (
        <div className="px-5 hover:scale-105">
            <div className="container p-10 bg-gray-100 rounded-lg shadow-lg">
                <p className={'text-center font-medium w-4/5'}>{text}</p>
            </div>
        </div>
    );
}
