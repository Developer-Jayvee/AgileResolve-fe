import { initModalPxSizes } from "@/constants/initStates";
import type { ModalSize } from "@/types/ContextTypes";
import { type ReactNode } from "react";
import { RiCloseFill } from "react-icons/ri";

interface CenterModalProps {
    children : ReactNode | null;
    closeModal : () =>void;
    size : ModalSize;
}

export default function CenterModal({
    children , closeModal , size ="sm"
} : CenterModalProps) {
    
    if(!children) return null;
    
    return <div className="fixed top-0 bottom-0 left-0 right-0 bg-black/50 flex justify-center items-center ">
        <div className={`p-4 flex flex-col bg-white rounded-2xl ${initModalPxSizes[size] ?? 'w-100' }`}>
            <div className="flex justify-end">
                <button>
                    <RiCloseFill className="cursor-pointer" onClick={() => closeModal()} />
                </button>
            </div>
            <div className="w-full h-full  flex flex-col p-2">
                {children}
            </div>
        </div>
    </div>
}