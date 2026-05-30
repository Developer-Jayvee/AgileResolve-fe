import type { ModalSize } from "@/types/ContextTypes";
import { type ComponentType, useMemo, useState } from "react";


type ModalPosition = "right" | "center";
interface ConfigTypes {
    component : any | null;
    props : any,
    position : ModalPosition;
    size ?: ModalSize;
}
export default function useModal() {

    const [modalComponent,setModalComponent] = useState<ComponentType<any> | null>(null);
    const [modalProps ,setModalProps] = useState<any>({});
    const [modalPosition ,setModalPosition] = useState<ModalPosition>("center");
    const [modalSize , setModalSize] = useState<ModalSize>("sm");
    const open = (config : ConfigTypes) => {
        setModalComponent(() => config.component)
        setModalProps(config.props);
        setModalPosition(config.position);
        setModalSize(config.size ?? 'sm');
    }
    const close = () => {
        setModalComponent(null);
        setModalProps({});
        setModalSize("sm");

    }

    const modalContextProvider = useMemo( () => ({
        open,
        close
    }),[modalComponent]);

    return {
        modalComponent,
        modalProps,
        modalPosition,
        modalSize,
        open,
        close,
        modalContextProvider
    }

    
    // const [isRightModalOpen, setRightModalOpen] = useState<boolean>(false);
    // const [isCenterModalOpen, setCenterModalOpen] = useState<boolean>(false);
    // const [modalSize, setModalSize] = useState<ModalSize>("sm");
    // const [modalContent, setModalContent] = useState<ReactNode>(<></>);

    // const modalContext = useMemo<ModalContextProps>(() => ({
    //     rightModal: {
    //         isOpen: isRightModalOpen,
    //         setOpen: setRightModalOpen,
    //         setChildren: setModalContent,
    //         children: modalContent,
    //     },
    //     centerModal: {
    //         isOpen: isCenterModalOpen,
    //         setOpen: setCenterModalOpen,
    //         setChildren: setModalContent,
    //         children: modalContent,
    //         size: modalSize,
    //         setModalSize

    //     }
    // }), [isRightModalOpen, isCenterModalOpen]);


    // useEffect(() => {
    //     if (!isRightModalOpen || !isCenterModalOpen) {
    //         setModalContent(<></>)
    //     }
    // }, [isRightModalOpen, isCenterModalOpen])
    // return {
    //     modalContext,
    //     modalContent
    // }
}