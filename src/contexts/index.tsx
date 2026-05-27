import { initModal, initPayloadTicket } from "@/constants/initStates";
import type { TicketContextProps, ModalContextProps, ProjectContextProps } from "@/types/ContextTypes";
import { createContext } from "react";


export const ModalContext = createContext<ModalContextProps>({
   rightModal : initModal,
   centerModal : initModal
});

export const ProjectContext = createContext<ProjectContextProps>({
    list : [],
    setList : () => []
});

export const TicketContext = createContext<TicketContextProps>({
    handleInput: () => false,
    handleSubmit: () => false,
    initStateForm: initPayloadTicket,
    formLoading :false

});