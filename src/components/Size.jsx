import { useState } from "react";

const Size = ({ children, title,click,selected,disabled = true }) => {
 

  return (
    <li
      className={`font-bold  ${selected  && disabled ? "bg-[#1D1D1D] text-white" : "bg-gray-200 text-black"}
       ${!disabled && "opacity-20"}
        w-9 h-9 flex items-center justify-center cursor-pointer rounded-lg`}
      title={title}
    >
      <button onClick={click} className="uppercase w-full h-full" disabled={!disabled}>
      {children}
      </button>
    </li> 
  );
};  

export default Size;