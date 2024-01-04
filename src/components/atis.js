import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

export const ATIS = (props) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <Button onPress={onOpen} radius="none" className="bg-[#646464] border-white border-2 w-fit h-12 pl-2 pr-2  ml-1 text-white text-3xl font-extrabold">ATIS</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="5xl">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                METAR - Information A
              </ModalHeader>
              <ModalBody>
                <p className="text-xl">
                    EKCH 041020Z AUTO 02020KT 9999 -SN BKN020/// BKN059/// M03/M07 Q1000 NOSIG
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
