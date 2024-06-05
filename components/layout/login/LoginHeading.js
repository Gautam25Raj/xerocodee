"use client";

import React from "react";
import { useSelector } from "react-redux";

const LoginHeading = () => {
  const user = useSelector((state) => state.user.user);

  return (
    <h2 className="text-3xl font-bold mb-4">{`Welcome ${
      user?.name || ""
    } !`}</h2>
  );
};

export default LoginHeading;
