"use client";

import { Stack, Switch } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const User = () => {
  const user = useSelector((state) => state.user.user);

  return (
    <div
      className="px-8 py-6 rounded-3xl flex justify-between items-start"
      style={{
        background:
          "linear-gradient(to bottom, rgba(211, 230, 255, 0.4), rgba(255, 255, 255, 0.4))",
      }}
    >
      <div>
        <h1 className="text-7xl font-bold mb-3">Hi {user?.name} !</h1>
        <p className="text-xl font-bold">Welcome to XeroCodee Ecosystem 😎</p>
      </div>

      <Stack direction="row" spacing={1} alignItems="center">
        <p className="text-black font-bold">Test Mode</p>
        <Switch defaultChecked inputProps={{ "aria-label": "ant design" }} />
        <p className="text-black font-bold">Prod Mode</p>
      </Stack>
    </div>
  );
};

export default User;
