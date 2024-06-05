"use client";

import {
  CardGiftcardOutlined,
  EmailOutlined,
  KeyboardArrowDownOutlined,
  NotificationsNoneOutlined,
  PermIdentityOutlined,
  SettingsOutlined,
} from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="flex justify-between w-full h-20 p-5">
      <Image
        src="/dashboard/logo.png"
        width={200}
        height={120}
        alt="Logo"
        className="h-10 w-32 ml-5"
      />

      <div className="flex items-center gap-2">
        <Button
          color="primary"
          className="normal-case text-black bg-yellow-300 rounded-full pl-2 pr-3 gap-2"
        >
          <IconButton
            className="rounded-full"
            size="small"
            style={{
              backgroundColor: "#f5f5f5",
              color: "black",
              padding: "0.5rem",
            }}
          >
            <CardGiftcardOutlined style={{ fontSize: "1rem" }} />
          </IconButton>
          Upgrade Plan
        </Button>

        <IconButton
          className="rounded-lg"
          color="primary"
          style={{
            backgroundColor: "#f5f5f5",
          }}
        >
          <NotificationsNoneOutlined />
        </IconButton>
        <IconButton
          className="rounded-lg"
          color="primary"
          style={{
            backgroundColor: "#f5f5f5",
          }}
        >
          <EmailOutlined />
        </IconButton>
        <IconButton
          className="rounded-lg"
          color="primary"
          style={{
            backgroundColor: "#f5f5f5",
          }}
        >
          <SettingsOutlined />
        </IconButton>

        <Button
          variant="text"
          className="normal-case text-black"
          endIcon={
            <KeyboardArrowDownOutlined
              style={{
                color: "black",
              }}
            />
          }
        >
          XeroCodee
        </Button>

        <IconButton
          className="rounded-lg"
          color="primary"
          style={{
            backgroundColor: "#f5f5f5",
          }}
        >
          <PermIdentityOutlined />
        </IconButton>
      </div>
    </div>
  );
}
