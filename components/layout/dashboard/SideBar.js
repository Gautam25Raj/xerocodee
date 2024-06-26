"use client";

import {
  GridViewOutlined,
  LayersOutlined,
  WidgetsOutlined,
} from "@mui/icons-material";
import { Button } from "@mui/material";
import Image from "next/image";

export default function SideBar() {
  const sidebarItems = [
    {
      name: "XeroCodee",
      Icon: <GridViewOutlined className="w-5 ml-12" />,
      link: "",
      disabled: false,
    },
    {
      name: "Builder Center",
      Icon: <LayersOutlined className="w-5 ml-12" />,
      link: "",
      disabled: true,
    },
    {
      name: "Service Board",
      Icon: (
        <Image
          src="/dashboard/hello 1.svg"
          width={200}
          height={120}
          alt="Logo"
          className="w-5 ml-12"
        />
      ),
      link: "",
      disabled: true,
    },
    {
      name: "Cluster",
      Icon: (
        <Image
          src="/dashboard/Vector.svg"
          width={200}
          height={120}
          alt="Logo"
          className="w-5 ml-12"
        />
      ),
      link: "",
      disabled: true,
    },
    {
      name: "Databases",
      Icon: (
        <Image
          src="/dashboard/Component 19.svg"
          width={200}
          height={120}
          alt="Logo"
          className="w-5 ml-12"
        />
      ),
      link: "",
      disabled: true,
    },
    {
      name: "Environment",
      Icon: (
        <Image
          src="/dashboard/Hard Drive.svg"
          width={200}
          height={120}
          alt="Logo"
          className="w-5 ml-12"
        />
      ),
      link: "",
      disabled: true,
    },
    {
      name: "Workflow",
      Icon: (
        <Image
          src="/dashboard/Vector(1).svg"
          width={200}
          height={120}
          alt="Logo"
          className="w-5 ml-12"
        />
      ),
      link: "",
      disabled: true,
    },
    {
      name: "Monitoring",
      Icon: (
        <Image
          src="/dashboard/monitoring 1.svg"
          width={200}
          height={120}
          alt="Logo"
          className="w-5 ml-12"
        />
      ),
      link: "",
      disabled: true,
    },
    {
      name: "Security",
      Icon: (
        <Image
          src="/dashboard/security 1.svg"
          width={200}
          height={120}
          alt="Logo"
          className="w-5 ml-12"
        />
      ),
      link: "",
      disabled: true,
    },
    {
      name: "Web Hooks",
      Icon: (
        <Image
          src="/dashboard/Vector(2).svg"
          width={200}
          height={120}
          alt="Logo"
          className="w-5 ml-12"
        />
      ),
      link: "",
      disabled: true,
    },
    {
      name: "Log Errors",
      Icon: (
        <Image
          src="/dashboard/Menu 2.svg"
          width={200}
          height={120}
          alt="Logo"
          className="w-5 ml-12"
        />
      ),
      link: "",
      disabled: true,
    },
  ];

  return (
    <div className="h-full flex flex-col gap-2 w-[20%] pt-6 sticky top-20">
      {sidebarItems.map((item, index) => {
        return item.disabled ? (
          <Button
            key={item.name}
            className="w-full normal-case bg-transparent rounded-full text-base gap-6 items-center p-2 py-3 text-black"
          >
            {item.Icon}
            <div className="w-full text-left">{item.name}</div>
          </Button>
        ) : (
          <Button
            key={item.name}
            className="w-full normal-case bg-white rounded-full text-base gap-6 items-center p-2 py-3 font-bold"
          >
            {item.Icon}
            <div className="w-full text-left">{item.name}</div>
          </Button>
        );
      })}
    </div>
  );
}
