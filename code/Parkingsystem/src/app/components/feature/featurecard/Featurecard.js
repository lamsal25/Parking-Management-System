import React from "react";

export default function Featurecard({ icon, text}) {
  return (
    <div className="px-5">
      <div className="content flex flex-col items-center gap-y-5">
        {icon}
        <p className="text-center tracking-wider w-4/5">{text}</p>
      </div>
    </div>
  );
}
