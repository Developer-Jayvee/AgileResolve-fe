import type { Dispatch, ReactNode, SetStateAction } from "react";
import type { StoreProjectResponseProps } from "./ProjectServiceTypes";

export interface RightModalContextProps {
    isOpen : boolean;
    setOpen : Dispatch<SetStateAction<boolean>>;
    setChildren : Dispatch<SetStateAction<ReactNode>>;
    children : ReactNode;

}
export type ModalSize = "sm" | "md" | "lg" | "xl" | "auto";
export interface ModalContextProps {
    rightModal : RightModalContextProps;
    centerModal : RightModalContextProps & {
        size ?: ModalSize;
        setModalSize : Dispatch<SetStateAction<ModalSize>>;
    };
}


export interface ProjectContextProps {
    list : Array<StoreProjectResponseProps[]>;
    setList : Dispatch<SetStateAction<StoreProjectResponseProps[]>>
}