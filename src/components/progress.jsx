import React from "react";

const Progress = ({ text, percent = 0, p_color = "#2f90f8" }) => {
  return (
    <div
      className="grid place-items-center aspect-square w-full lg:w-32 lg:text-lg rounded-full"
      style={{
        background: `conic-gradient(${p_color} ${
          percent * 3.6
        }deg, #f2f2f2 0deg)`,
      }}
    >
      <div className="grid place-items-center aspect-square w-[calc(100%-12px)] bg-white rounded-full capitalize text-center break-words overflow-hidden">
        {text}
      </div>
    </div>
  );
};

export default Progress;
