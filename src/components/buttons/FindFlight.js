import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
} from "@nextui-org/react";

export const FindFlight = (props) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} radius="none" className="bg-[#646464] pl-4 pr-4 border-white border-2 mr-1 text-white text-xl">FIND</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="xs">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                FIND FLIGHT
              </ModalHeader>
              <ModalBody>
                <Input placeholder="OYDDA" label="C/S" size="lg">
                  
                </Input>
                <div className="flex justify-around">


                </div>
              </ModalBody>
              <ModalFooter className=" justify-center">
                <Button color="danger" variant="light" onPress={onClose}>
                  ESC
                </Button>
                <Button color="primary" onPress={onClose}>
                  SEARCH
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
