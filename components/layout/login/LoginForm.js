"use client";

import { Button } from "@mui/base";
import { TextField } from "@mui/material";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { account } from "@/server/appwrite/config";
import { toast } from "sonner";

const LoginForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async (email, password) => {
    try {
      const session = await account.createEmailPasswordSession(email, password);

      setEmail("");
      setPassword("");

      router.push("/onboarding");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      login(email, password);
    } catch (error) {
      toast.error(error.message);
    }

    console.log("Form Submitted");
  };

  return (
    <form className="flex flex-col space-y-4 w-10/12">
      <TextField
        id="email"
        label="Email-id"
        variant="outlined"
        size="small"
        className="h-11"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <TextField
        id="password"
        label="Password"
        variant="outlined"
        size="small"
        className="h-11"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button
        variant="contained"
        className="bg-[#1F64FF] py-3 uppercase text-white font-bold rounded-md"
        onClick={handleSubmit}
      >
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
