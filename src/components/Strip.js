import React from "react";

export const Strip = (props) => {
  return (
    <div className="w-fit h-14 bg-[#BEF5EF] border-l-4 border-r-4 border-t-2 border-b-2 mb-1 flex items-center">
        <div className="border-r-2 border-l-2 border-t-2 border-b-2 border-[#85B4AF] w-36 h-full flex items-center pl-2 text-xl font-bold">
            {props.callsign}
        </div>
        <div className="border-r-1 border-l-1 border-t-2 border-b-2 border-[#85B4AF] w-16 pl-4 pr-4 h-full flex flex-col  items-center justify-center text-center">
            <span className="font-extrabold">{props.ades}</span><span className="font-extrabold">{props.stand}</span>
        </div>
        <div className="border-r-1 border-l-1 border-t-2 border-b-2 border-[#85B4AF] w-28 h-full flex items-top justify-between text-center pl-2 pr-2">
            <div>EOBT</div> <div>{props.eobt}</div>
        </div>
        <div className="border-r-2 border-l-1 border-t-2 border-b-2 border-[#85B4AF] w-32 h-full flex flex-col">
            <span className="border-[#85B4AF] border-b-1 border-r-1 text-left flex items-center w-full h-full pl-2">
            TSAT: {props.tsat}
            </span>
            <div className="border-[#85B4AF] border-t-1 border-r-1 text-left flex items-center w-full h-full pl-2">
            CTOT: {props.ctot}
            </div>
        </div>
    </div>
  );
};
