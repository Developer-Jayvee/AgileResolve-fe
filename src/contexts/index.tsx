import type { ProjectContextProps, RightModalContextProps } from "@/types/ContextTypes";
import { createContext } from "react";


export const RightModalContext = createContext<RightModalContextProps>({
    isOpen : false,
    setOpen : () => false,
    setChildren : () => <></>
});

export const ProjectContext = createContext<ProjectContextProps>({
    list : [],
    setList : () => []
});