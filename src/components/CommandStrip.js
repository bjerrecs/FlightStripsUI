import React from "react";

export const Commandstrip = () => {
  return (
    <div className="bg-[#3C3C3C] w-screen h-16 absolute bottom-0 flex items-center pl-2 justify-between">
      <div className="pl-2 pr-2 flex items-center text-3xl font-extrabold">
        <div className="bg-green-500 text-black w-32 h-12 text-center font-bold pl-4 pr-4 break-words text-base">
          TE TW TC APRON DEL
        </div>

        <span className=" text-white ml-2 mr-2">DEP</span>
        <div className="bg-white w-fit h-12 ml-2 mr-2 pl-2 pr-2  flex items-center text-center">
          22R
        </div>
        <span className="  text-white ml-2 mr-2">ARR</span>
        <div className="bg-white w-fit h-12 ml-2 mr-2 pl-2 pr-2   flex items-center text-center">
          22L
        </div>
        <span className="  text-white ml-2 mr-2">QNH</span>
        <div className="bg-black text-white w-fit h-12 ml-2 mr-2 pl-2 pr-2  flex items-center text-center">
          1040
        </div>
        <button className="bg-[#646464] border-white border-2 w-fit h-12 pl-2 pr-2  ml-1 text-white">
          ATIS
        </button>
        <div className="bg-white w-12 h-12 ml-2 mr-2 justify-center items-center flex">
          D
        </div>
        <div className="bg-white w-fit h-12 ml-2 mr-2 justify-center items-center flex pl-4 pr-4">
          310/23G43KT
        </div>
      </div>
      <div className="pl-2 pr-2 flex items-center text-3xl font-extrabold">
      <button className="bg-[#646464] border-white border-2 w-fit h-12 pl-2 pr-2  ml-1 text-white">
          TRF
        </button>
        <button className="bg-[#646464] border-white border-2 w-fit h-12 pl-2 pr-2  ml-1 text-white">
          MRK
        </button>
        <button className="bg-[#646464] border-white border-2 w-fit h-12 pl-2 pr-2  ml-1 text-white">
          REQ
        </button>
        <button className="bg-[#646464] border-white border-2 w-16 h-12 pl-2 pr-2  ml-1 text-white">
          X
        </button>
        <div className="bg-white w-fit h-12 ml-2 mr-2 justify-center items-center flex pl-4 pr-4">
          19:24:56z
        </div>
      </div>
    </div>
  );
};
