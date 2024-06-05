import RoleProvider from "@/providers/RoleProvider";
import React from "react";

const page = () => {
  return (
    <RoleProvider>
      <div>page</div>
    </RoleProvider>
  );
};

export default page;
