"use client";

import React from "react";
import { useSelector } from "react-redux";

import LogoutBtn from "@/components/ui/LogoutBtn";
import OnboardSelect from "@/components/layout/onBoard/OnboardSelect";

const OnBoarding = () => {
  const user = useSelector((state) => state.user.user);
  console.log(user);

  return (
    <div className="h-screen py-10 px-16 flex justify-center flex-col items-end relative">
      <LogoutBtn />

      <div className="bg-white px-28 py-28 rounded-3xl w-full max-w-6xl mx-auto text-center space-y-16">
        <h2 className="text-black font-bold text-3xl">{`Welcome ${user?.name} !`}</h2>

        <OnboardSelect />
      </div>
    </div>
  );
};

export default OnBoarding;
