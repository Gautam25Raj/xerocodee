"use client";

import { setRole } from "@/redux/slice/userSlice";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

import React from "react";
import { useDispatch } from "react-redux";

const Company = ({ setSelected }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleCompany = () => {
    setSelected("comp");
    dispatch(setRole("comp"));
    console.log("Company");
  };

  return (
    <Button
      variant="outlined"
      onClick={handleCompany}
      className="border-[#8F8F8F] text-black hover:border-black hover:text-white hover:bg-[#1F64FF] px-20 py-3"
    >
      Company
    </Button>
  );
};

export default Company;
