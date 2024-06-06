import React from "react";
import User from "./User";
import Progress from "./Progress";
import Steps from "./Steps";

const Main = () => {
  return (
    <div className="w-full">
      <User />

      <div className="flex gap-4 w-full">
        <Steps />
        <Progress />
      </div>
    </div>
  );
};

export default Main;
