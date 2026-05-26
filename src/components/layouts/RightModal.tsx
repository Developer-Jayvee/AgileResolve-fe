import { RiCloseFill } from "react-icons/ri";
import { useContext } from "react";
import { ModalContext } from "@/contexts";


export default function RightModal() {
    const { rightModal } = useContext(ModalContext)
    const { setOpen , isOpen , children } = rightModal;
    if(!isOpen) return null

    return <div className="fixed top-0 bottom-0 left-0 right-0 bg-black/50 ">
        <div className="right-modal animate-slide-left p-4 absolute top-4 right-4 bottom-4 w-100 rounded-2xl bg-white">
            <div className="flex justify-end">
                <button>
                    <RiCloseFill className="cursor-pointer" onClick={() => setOpen(false)}/>
                </button>
            </div>
            <div className="w-full h-full  flex flex-col p-2">
                    {children}
            </div>
        </div>
    </div>
}