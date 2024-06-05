"use client";

import { setRole } from "@/redux/slice/userSlice";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

import React from "react";
import { useDispatch } from "react-redux";

const Developer = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleDeveloper = () => {
    dispatch(setRole("dev"));
    router.push("/hosting");
  };

  return (
    <Button
      variant="outlined"
      onClick={handleDeveloper}
      className="border-[#8F8F8F] text-black hover:border-black hover:text-black px-20 py-3"
    >
      Developer
    </Button>
  );
};

export default Developer;
