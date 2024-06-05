import {
  clearCompany,
  clearOrganisation,
  setCompany,
  setOrganisation,
} from "@/redux/slice/userSlice";
import { Button, TextField } from "@mui/material";
import { useRouter } from "next/navigation";

import React, { useState } from "react";
import { useDispatch } from "react-redux";

const OrgCompName = ({ text }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [orgCompName, setOrgCompName] = useState("");

  const handleSubmit = () => {
    if (text === "org") {
      dispatch(setOrganisation(orgCompName));

      dispatch(clearCompany(orgCompName));
      router.push("/hosting");
    } else if (text === "comp") {
      dispatch(setCompany(orgCompName));

      dispatch(clearOrganisation(orgCompName));
      router.push("/hosting");
    }
  };

  return (
    <div className="space-x-4 flex max-w-md mx-auto">
      <TextField
        id="outlined-basic"
        label={text === "org" ? "Organisation Name" : "Company Name"}
        variant="outlined"
        value={orgCompName}
        size="small"
        onChange={(e) => setOrgCompName(e.target.value)}
        fullWidth
      />

      <Button variant="contained" onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
};

export default OrgCompName;
