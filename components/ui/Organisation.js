"use client";

import { setRole } from "@/redux/slice/userSlice";
import { Button } from "@mui/material";

import React from "react";
import { useDispatch } from "react-redux";

const Organisation = ({ setSelected }) => {
  const dispatch = useDispatch();

  const handleOrganisation = () => {
    setSelected("org");
    dispatch(setRole("org"));
    console.log("Organisation");
  };

  return (
    <Button
      variant="outlined"
      onClick={handleOrganisation}
      className="border-[#8F8F8F] text-black hover:border-black hover:text-black px-20 py-3"
    >
      Organisation
    </Button>
  );
};

export default Organisation;
