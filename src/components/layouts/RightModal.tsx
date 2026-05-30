import { RiCloseFill } from "react-icons/ri";
import {  type Dispatch, type ReactNode, type SetStateAction } from "react";

interface RightModalProps {
    children : ReactNode | null;
    setModalOpen? : Dispatch<SetStateAction<boolean>>;
    isModalOpen? : boolean;
}
export default function RightModal({
    children, setModalOpen, isModalOpen = false
} : RightModalProps) {
    if(!isModalOpen) return null
    
    return <div className="fixed top-0 bottom-0 left-0 right-0 bg-black/50 ">
        <div className="right-modal animate-slide-left p-4 absolute top-4 right-4 bottom-4 w-100 rounded-2xl bg-white">
            <div className="flex justify-end">
                <button>
                    <RiCloseFill className="cursor-pointer" onClick={() => setModalOpen && setModalOpen(false)}/>
                </button>
            </div>
            <div className="w-full h-full  flex flex-col p-2">
                    {children}
            </div>
        </div>
    </div>
}