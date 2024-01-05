import React from "react";

export const Strip = (props) => {
  return (
    <div className="w-[90%] h-16 bg-[#BEF5EF] border-4 flex items-center font-bold ">
        <div className="border-r-2 border-l-4 border-t-4 border-b-4 border-[#85B4AF] w-48 pr-8 h-full flex items-center pl-2 text-2xl">
            {props.callsign}
        </div>
        <div className="border-r-2 border-l-2 border-t-4 border-b-4 border-[#85B4AF] w-fit pl-4 pr-4 h-full flex flex-col  items-center justify-center text-center">
            <span className="font-extrabold">{props.ades}</span><span className="font-extrabold">{props.stand}</span>
        </div>
        <div className="border-r-2 border-l-2 border-t-4 border-b-4 border-[#85B4AF] w-32 h-full flex items-top justify-between text-center pl-2 pr-2">
            <div>EOBT</div> <div>{props.eobt}</div>
        </div>
        <div className="border-r-2 border-l-2 border-t-4 border-b-4 border-[#85B4AF] w-full h-full flex flex-col">
            <span className="border-[#85B4AF] border-b-2 border-r-2 text-left flex items-center w-full h-full">
            TSAT:{props.tsat}
            </span>
            <div className="border-[#85B4AF] border-t-2 border-r-2 text-left flex items-center w-full h-full">
            CTOT:{props.ctot}
            </div>
        </div>
    </div>
  );
};
