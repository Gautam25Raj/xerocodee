"use client";

import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

import React from "react";

const XeroCodee = () => {
  const router = useRouter();

  const handleXeroCodee = () => {
    router.push("/xerocodee");
  };

  return (
    <Button
      variant="outlined"
      onClick={handleXeroCodee}
      className="border-[#8F8F8F] text-black hover:border-black hover:text-white hover:bg-[#1F64FF] px-24 py-3"
    >
      XeroCodee
    </Button>
  );
};

export default XeroCodee;
