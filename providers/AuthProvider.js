"use client";

import React, { Suspense, useEffect } from "react";
import { toast } from "sonner";

import { useDispatch } from "react-redux";
import { setUser } from "@/redux/slice/userSlice";
import { useRouter } from "next/navigation";

import { account } from "@/server/appwrite/config";

const AuthProvider = ({ children }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const getUser = async () => {
    try {
      const user = await account.get();

      if (user) {
        dispatch(setUser(user));
        router.push("/onboarding");
      } else router.push("/login");
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <Suspense
      fallback={
        <div className="h-screen w-screen flex justify-center items-center">
          <h1>Loading...</h1>
        </div>
      }
    >
      {children}
    </Suspense>
  );
};

export default AuthProvider;
