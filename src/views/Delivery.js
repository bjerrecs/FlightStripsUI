import React from "react";
import { Commandstrip } from "../components/CommandStrip";
import { Header } from "../components/Header";
import { Strip } from "../components/Strip";
import { MSGModal } from "../components/MSGModal";
import { FindFlight } from "../components/buttons/FindFlight";

export const Delivery = () => {
  return (
    <div className="h-screen">
      <div className="bg-[#A9A9A9] w-screen h-full flex justify-center justify-items-center shrink">
        <div className="bg-[#555355] w-full h-auto ml-0 mr-2">
          <Header headerName="OTHERS" buttons={<FindFlight/>}/>
          <Strip callsign="VKG1332/t" ades="LGPR" stand="D3" eobt="1350" tsat="1400" ctot="1400"/>
        </div>
        <div className="bg-[#555355] w-full h-auto ml-1 mr-1.5">
          <Header headerName="SAS" />
          <div className="h-3/5 overflow-auto overflow-x-hidden">
            <Strip callsign="SAS42T" ades="EKYT" stand="B6" eobt="1350" tsat="1400" ctot="1400"/>
            <Strip callsign="SAS7736" ades="LEPA" stand="B4" eobt="1350" tsat="1400" ctot="1400"/>
            <Strip callsign="SAD43G" ades="ENGM" stand="B8" eobt="1350" tsat="1400" ctot="1400"/>
            <Strip callsign="SAS418" ades="ESSA" stand="B7" eobt="1350" tsat="1400" ctot="1400"/>
            <Strip callsign="SAS031" ades="LHBP" stand="B9" eobt="1350" tsat="1400" ctot="1400"/>
            <Strip callsign="SAS446Y" ades="EGKK" stand="B16" eobt="1350" tsat="1400" ctot="1400"/>
            <Strip callsign="SAS9909" ades="ENBR" stand="A12" eobt="1350" tsat="1400" ctot="1400"/>
            <Strip callsign="SAS23" ades="EKBI" stand="A14" eobt="1350" tsat="1400" ctot="1400"/>
            <Strip callsign="SAS928" ades="EKVG" stand="A11" eobt="1350" tsat="1400" ctot="1400"/>
            <Strip callsign="SAS887" ades="KBOS" stand="B10" eobt="1350" tsat="1400" ctot="1400"/>
            <Strip callsign="SAS42T" ades="EKYT" stand="B6" eobt="1350" tsat="1400" ctot="1400"/>
            <Strip callsign="SAS7736" ades="LEPA" stand="B4" eobt="1350" tsat="1400" ctot="1400"/>
            <Strip callsign="SAD43G" ades="ENGM" stand="B8" eobt="1350" tsat="1400" ctot="1400"/>
          </div>
          <Header headerName="NORWEGIAN" />
          <div className="overflow-auto overflow-x-hidden">
          <Strip callsign="NZS38F" ades="KBOS" stand="B10" eobt="1350" tsat="1400" ctot="1400"/>
          <Strip callsign="NAX948" ades="ENGM" stand="B10" eobt="1350" tsat="1400" ctot="1400"/>
          <Strip callsign="NOZ662" ades="EKYT" stand="B10" eobt="1350" tsat="1400" ctot="1400"/>
          <Strip callsign="NZS3096" ades="EKBI" stand="B10" eobt="1350" tsat="1400" ctot="1400"/>
          <Strip callsign="NZS38F" ades="EGKK" stand="B10" eobt="1350" tsat="1400" ctot="1400"/>
          <Strip callsign="NZS342" ades="ESSA" stand="B10" eobt="1350" tsat="1400" ctot="1400"/>

          </div>
        </div>
        <div className="bg-[#555355] w-full h-auto ml-1.5 mr-1">
          <Header headerName="CLEARED" />
          <div className="h-2/4"></div>
          <Header headerName="MESSAGES" TypeMSG buttons={<MSGModal/>}/>
        </div>
        <div className="bg-[#555355] w-full h-auto ml-2 mr-0">
          <Header headerName="PUSHBACK" />
          <div className="h-1/3"></div><Header headerName="TWY DEP" />
        </div>
      </div>
      <Commandstrip />
    </div>
  );
};
