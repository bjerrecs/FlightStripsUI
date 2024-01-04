import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Textarea,
} from "@nextui-org/react";

export const MSGModal = (props) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  function BroadcastToStation(props) {
    return (
      <Button radius="none" className="w-24 m-2 font-semibold">{props.text}</Button>
    )
  }

  function PreDefMSG(props) {
    return (
      <Button radius="none" className="w-full m-2 font-semibold ">{props.text}</Button>
    )
  }

  return (
    <>
      <Button onPress={onOpen} radius="none" className="bg-[#646464] pl-4 pr-4 border-white border-2 mr-1 text-white text-xl">NEW</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="5xl">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Messages
              </ModalHeader>
              <ModalBody>
                <Textarea placeholder="Text can be written down here">
                  
                </Textarea>
                <div className="flex justify-around">

                  <div className="flex w-64 flex-col justify-center items-center bg-gray-500 ml-4 mr-4">
                    <Button radius="none" color="success" className="w-52 ml-4 mr-4 mb-2 mt-2 font-semibold">BROADCAST</Button>
                    <div className="flex">
                      <BroadcastToStation text="CLR DEL"/>
                      <BroadcastToStation text="CLR DEL"/>
                    </div>
                    <div className="flex">
                      <BroadcastToStation text="APRON ARR"/>
                      <BroadcastToStation text="APRON DEP"/>
                    </div>
                    <div className="flex">
                      <BroadcastToStation text="GND WEST"/>
                      <BroadcastToStation text="GND EAST"/>
                    </div>
                    <div className="flex">
                      <BroadcastToStation text="TWR ARR"/>
                      <BroadcastToStation text="TWR DEP"/>
                    </div>
                  </div>
                  <div className="w-2/3">
                    <PreDefMSG text="RUNWAY CHANGE TO 04R/04L"/>
                    <PreDefMSG text="RUNWAY CHANGE TO 22R/22L"/>
                    <PreDefMSG text="RUNWAY CHANGE TO 12/30"/>
                    <PreDefMSG text="CLOSING POSITION SOON"/>
                    <PreDefMSG text="ENFORCE A-CDM. TRAFFIC LOAD TOO HIGH"/>
                    <PreDefMSG text="ALL DEPARTURES MUST BE CLRD RWY-HDG 4000' UFN"/>
                    <PreDefMSG text="ATIS REPORTED DOWN. PLEASE RESOLVE"/>
                    <PreDefMSG text="ATIS REPORT WRONG RWY CONFIG"/>
                  </div>

                </div>
              </ModalBody>
              <ModalFooter className=" justify-center">
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Send MSG
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
