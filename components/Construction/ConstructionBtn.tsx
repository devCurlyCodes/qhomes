import React from "react";
import PrimaryBtn from "../Buttons/PrimaryBtn";

const ConstructionBtn = () => {
  return (
    <div className="bottomBtn mt-5  w-[80%] justify-start  md:hidden">
      <PrimaryBtn label={"View Under Construction"} />
    </div>
  );
};

export default ConstructionBtn;
