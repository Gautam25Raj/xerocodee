"use client";

import { Button } from "@mui/base";
import { TextField } from "@mui/material";

import { useState } from "react";

import { toast } from "sonner";
import { account, ID } from "@/server/appwrite/config";

import { useRouter } from "next/navigation";

const SignupForm = () => {
  const router = useRouter();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const login = async (email, password) => {
    try {
      const session = await account.createEmailPasswordSession(email, password);

      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");

      router.push("/onboarding");
    } catch (error) {
      toast.error(error.message);
    }

    console.log(account.get());
  };

  const register = async () => {
    try {
      await account.create(ID.unique(), email, password, firstName, lastName);

      login(email, password);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      register(email, password);
    } catch (error) {
      toast.error(error.message);
    }

    console.log("Form Submitted");
  };

  return (
    <form className="flex flex-col space-y-4 max-w-lg mx-auto">
      <TextField
        id="first-name"
        label="First Name"
        variant="outlined"
        size="small"
        className="h-11"
        color="primary"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />

      <TextField
        id="last-name"
        label="Last Name"
        variant="outlined"
        size="small"
        className="h-11"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />

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

      <TextField
        id="confirm-password"
        label="Confirm Password"
        variant="outlined"
        size="small"
        className="h-11"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      <Button
        variant="contained"
        className="bg-[#1F64FF] py-3 uppercase text-white font-bold rounded-md"
        onClick={handleSubmit}
      >
        Sign Up
      </Button>
    </form>
  );
};

export default SignupForm;
