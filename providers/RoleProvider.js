"use client";

import { useRouter } from "next/navigation";
import React, { Suspense, useEffect } from "react";
import { useSelector } from "react-redux";

const RoleProvider = ({ children }) => {
  const router = useRouter();

  const role = useSelector((state) => state.user.role);

  useEffect(() => {
    if (!role) {
      router.push("/onboarding");
    }
  }, []);

  return <Suspense>{children}</Suspense>;
};

export default RoleProvider;
