import React from "react";

import SelfHosting from "@/components/ui/SelfHosting";
import XeroCodee from "@/components/ui/XeroCodee";

import RoleProvider from "@/providers/RoleProvider";

const page = () => {
  return (
    <RoleProvider>
      <div className="spae-x-3 flex justify-between">
        <SelfHosting />
        <XeroCodee />
      </div>
    </RoleProvider>
  );
};

export default page;
