import { ProjectContextStates } from "@/constants/initProjectStates";
import { initModal, initPayloadTicket } from "@/constants/initStates";
import { TicketListState } from "@/constants/initTicketStates";
import { type TicketContextProps, type ModalContextProps,type ProjectContextProps } from "@/types/ContextTypes";
import { createContext } from "react";


export const ModalContext = createContext<ModalContextProps>({
   rightModal : initModal,
   centerModal : initModal
});

export const ProjectContext = createContext<ProjectContextProps>(ProjectContextStates);


export const TicketContext = createContext<TicketContextProps>({
    ticketList : TicketListState,
    ticketIsLoading: false
});