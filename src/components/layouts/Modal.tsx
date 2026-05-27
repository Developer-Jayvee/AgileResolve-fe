import {  useState, type ComponentType } from "react";
import RightModal from "./RightModal";
import CenterModal from "./CenterModal";
import type { ModalSize } from "@/types/ContextTypes";


type ModalPosition = "right" | "center";

interface ModalProps {
    position : ModalPosition;
    config : {
        component : ComponentType | null;
        props : any
    };
    size ?: ModalSize;
    closeModal : () => void;
}
export default function Modal({
    position, config , closeModal , size = "sm"
} : ModalProps){
    const ModalComponent =  config.component;
    if(!ModalComponent) return null;
    switch (position) {
        case 'center':
            return (
                <CenterModal closeModal={closeModal} size={size}>
                    <ModalComponent {...config.props}/>
                </CenterModal>
            );
        case 'right':
            return (
                <RightModal closeModal={closeModal}>
                    <ModalComponent {...config.props}/>
                </RightModal>
                );
    }
}