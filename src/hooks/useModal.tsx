import type { ModalContextProps, ModalSize } from "@/types/ContextTypes";
import { useEffect, useMemo, useState, type ReactNode } from "react";


export default function useModal() {

    const [isRightModalOpen, setRightModalOpen] = useState<boolean>(false);
    const [isCenterModalOpen, setCenterModalOpen] = useState<boolean>(false);
    const [modalSize, setModalSize] = useState<ModalSize>("sm");
    const [modalContent, setModalContent] = useState<ReactNode>(<></>);

    const modalContext = useMemo<ModalContextProps>(() => ({
        rightModal: {
            isOpen: isRightModalOpen,
            setOpen: setRightModalOpen,
            setChildren: setModalContent,
            children: modalContent,
        },
        centerModal: {
            isOpen: isCenterModalOpen,
            setOpen: setCenterModalOpen,
            setChildren: setModalContent,
            children: modalContent,
            size: modalSize,
            setModalSize

        }
    }), [isRightModalOpen, isCenterModalOpen]);


    useEffect(() => {
        if (!isRightModalOpen || !isCenterModalOpen) {
            setModalContent(<></>)
        }
    }, [isRightModalOpen, isCenterModalOpen])
    return {
        modalContext,
        modalContent
    }
}