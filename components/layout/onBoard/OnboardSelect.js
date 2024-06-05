"use client";

import { useState } from "react";

import Company from "@/components/ui/Company";
import Developer from "@/components/ui/Developer";
import Organisation from "@/components/ui/Organisation";

import OrgCompName from "./OrgCompName";

const OnboardSelect = () => {
  const [selected, setSelected] = useState("");

  return (
    <>
      <div className="flex justify-between">
        <Developer />
        <Organisation selected={selected} setSelected={setSelected} />
        <Company selected={selected} setSelected={setSelected} />
      </div>

      {selected != "" && <OrgCompName text={selected} />}
    </>
  );
};

export default OnboardSelect;
