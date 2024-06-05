import Image from "next/image";
import React from "react";

const ProgressItem = ({ step, name, status, color, src, border }) => {
  return (
    <li className="min-w-80">
      <p className="text-sm text-[#797979] font-bold">Step {step}</p>

      <div
        className="flex items-center justify-between py-3 px-4 rounded-2xl"
        style={{
          backgroundColor: color,
        }}
      >
        <div className="">
          <h4 className="text-black text-xl font-bold">{name}</h4>
          <p className="text-sm text-[#797979] font-bold">Status: {status}</p>
        </div>

        <div className="flex items-center gap-2">
          <Image
            src={src}
            alt={name}
            width={50}
            height={50}
            className={border}
          />

          <div className="space-y-1">
            <div className="rounded-full w-2 h-2 bg-[#24233133]"></div>
            <div className="rounded-full w-2 h-2 bg-[#24233133]"></div>
            <div className="rounded-full w-2 h-2 bg-[#24233133]"></div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ProgressItem;
