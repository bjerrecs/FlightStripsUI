import React from "react";

export const Header = (props) => {
  return (
    <div className={props.TypeMSG ? 'bg-[#285a5c]' : 'bg-[#393939]'}>
    <div className="w-full h-10 text-white text-xl flex items-center pl-2 pr-2 justify-between font-semibold">
      {props.headerName}
      <div className="flex ">
        <button className="bg-[#646464] pl-4 pr-4 border-white border-2 mr-1 ">
          NEW
        </button>
        <button className="bg-[#646464] pl-4 pr-4 border-white border-2 ml-1">
          PLANNED
        </button>
      </div>
    </div>
    </div>

  );
};
