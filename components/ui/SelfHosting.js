"use client";

import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

import React from "react";

const SelfHosting = () => {
  const router = useRouter();

  const handleSelfHosting = () => {
    router.push("/self-hosting");
  };

  return (
    <Button
      variant="outlined"
      onClick={handleSelfHosting}
      className="border-[#8F8F8F] text-black hover:border-black hover:text-white hover:bg-[#1F64FF] px-24 py-3"
    >
      Self Hosting
    </Button>
  );
};

export default SelfHosting;
