import React from "react";
interface PrimaryBtnProps {
  label: string;
}
const PrimaryBtn: React.FC<PrimaryBtnProps> = ({ label }) => {
  return (
    <div className=" flex items-center justify-center bg-black text-white p-2 font-inter text-md rounded-sm border border-transparent transition-all duration-300 hover:bg-white hover:text-black hover:border-slate-600 cursor-pointer">
      <span>{label}</span>
    </div>
  );
};

export default PrimaryBtn;
