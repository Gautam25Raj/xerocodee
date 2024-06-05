import React from "react";
import ProgressItem from "./ProgressItem";
import Image from "next/image";

const Progress = () => {
  return (
    <div className="bg-white border border-black/10 w-fit rounded-3xl py-8 px-4 mt-6">
      <h2 className="font-bold text-center text-black">Your Progress</h2>
      <p className="font-bold text-center text-[#818181]">towards XeroCodee</p>

      <div className="h-36 w-36 relative my-12 mx-auto">
        <Image
          src="/dashboard/progress/progress.svg"
          alt="progress"
          width={144}
          height={144}
        />

        <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-black text-2xl">
          66%
        </p>
      </div>

      <div className="w-fit mx-auto">
        <button className="text-[#797979] font-bold rounded-full py-1 px-3 border border-[#7979792e] shadow mb-8 mx-auto w-fit text-center">
          View Details
        </button>
      </div>

      <ul className="space-y-6">
        <ProgressItem
          step={1}
          name={"AWS"}
          status={"Complete"}
          src="/dashboard/progress/aws.svg"
          color="#FFF5E5"
        />

        <ProgressItem
          step={2}
          name={"Gitlab"}
          status={"Complete"}
          src="/dashboard/progress/gitlab.svg"
          color="#FCECEA"
        />

        <ProgressItem
          step={3}
          name={"MongoDB"}
          status={"Pending"}
          src="/dashboard/progress/mongo.svg"
          color="#EDF5ED"
        />
      </ul>
    </div>
  );
};

export default Progress;
