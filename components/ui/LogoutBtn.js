"use client";

import { clearUser } from "@/redux/slice/userSlice";
import { Button } from "@mui/material";
import React from "react";

import { useDispatch } from "react-redux";
import { toast } from "sonner";

import { account } from "@/server/appwrite/config";
import { useRouter } from "next/navigation";

const LogoutBtn = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const logout = async () => {
    try {
      await account.deleteSession("current");

      dispatch(clearUser());
      router.push("/login");
      toast.success("Logged out successfully");
    } catch (error) {
      toast.error(error.message);
      router.push("/login");
    }
  };

  return (
    <Button
      variant="outlined"
      className="border-[#8F8F8F] text-[#8F8F8F] hover:border-black hover:text-black absolute top-10 right-10"
      onClick={logout}
    >
      Log Out
    </Button>
  );
};

export default LogoutBtn;
