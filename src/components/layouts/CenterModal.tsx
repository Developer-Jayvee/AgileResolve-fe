import { initModalPxSizes } from "@/constants/initStates";
import type { DefaultModalProps } from "@/types/ComponentTypes";
import type { ModalSize } from "@/types/ContextTypes";
import { RiCloseFill } from "react-icons/ri";


export default function CenterModal({ children, size = "sm" , setModalOpen, isModalOpen } : DefaultModalProps & { size ?: ModalSize }) {
    if(!isModalOpen) return null;
    
    return <div className="fixed top-0 bottom-0 left-0 right-0 bg-black/50 flex justify-center items-center ">
        <div className={`p-4 flex flex-col bg-white rounded-2xl ${initModalPxSizes[size] ?? 'w-100' }`}>
            <div className="flex justify-end">
                <button>
                    <RiCloseFill className="cursor-pointer" onClick={() => setModalOpen && setModalOpen(false)} />
                </button>
            </div>
            <div className="w-full h-full  flex flex-col p-2">
                {children}
            </div>
        </div>
    </div>
}