import { initModal } from "@/constants/initStates";
import type { ModalContextProps, ProjectContextProps } from "@/types/ContextTypes";
import { createContext } from "react";


export const ModalContext = createContext<ModalContextProps>({
   rightModal : initModal,
   centerModal : initModal
});

export const ProjectContext = createContext<ProjectContextProps>({
    list : [],
    setList : () => []
});