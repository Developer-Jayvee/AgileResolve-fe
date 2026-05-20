import type { Dispatch, ReactNode, SetStateAction } from "react";
import type { StoreProjectResponseProps } from "./ProjectServiceTypes";


export interface RightModalContextProps {
    isOpen : boolean;
    setOpen : Dispatch<SetStateAction<boolean>>;
    setChildren : Dispatch<SetStateAction<ReactNode>>;
}


export interface ProjectContextProps {
    list : Array<StoreProjectResponseProps[]>;
    setList : Dispatch<SetStateAction<StoreProjectResponseProps[]>>
}