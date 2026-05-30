import { ProjectContextStates } from "@/constants/initProjectStates";
import { initModal, initPayloadTicket } from "@/constants/initStates";
import { type TicketContextProps, type ModalContextProps,type ProjectContextProps } from "@/types/ContextTypes";
import { createContext } from "react";


export const ModalContext = createContext<ModalContextProps>({
   rightModal : initModal,
   centerModal : initModal
});

export const ProjectContext = createContext<ProjectContextProps>(ProjectContextStates);


export const TicketContext = createContext<TicketContextProps>({
    handleInput: () => false,
    handleSubmit: () => false,
    initStateForm: initPayloadTicket,
    formLoading :false

});