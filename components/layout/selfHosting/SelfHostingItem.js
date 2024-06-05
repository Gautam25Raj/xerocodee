import React from "react";

const SelfHostingItem = ({ img, heading, paragraph }) => {
  return (
    <li className="bg-white p-5 flex rounded-lg space-x-4 border border-[#C0C0C0]">
      <div className="border border-[#8F8F8F] w-24 h-24 rounded-md overflow-hidden"></div>

      <div className="flex flex-col justify-evenly">
        <h3 className="text-xl font-bold">{heading}</h3>
        <p>{paragraph}</p>
      </div>
    </li>
  );
};

export default SelfHostingItem;
