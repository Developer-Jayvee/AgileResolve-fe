import useTickets from "@/hooks/useTickets";
import type { TicketContextProps } from "@/types/ContextTypes";
import { createContext, type ReactNode } from "react";

interface ProviderProps {
    children : ReactNode;
}
export interface ExtendedTicketContextProps  extends TicketContextProps{
    clearInitState : () => void;
}
export const TicketContext = createContext<ExtendedTicketContextProps | null>(null);


export default function TicketContextProvider({ children } : ProviderProps){

    const { ticketContextProvider , ticketResetForm } = useTickets()

    
    return <TicketContext.Provider value={{
        ...ticketContextProvider,
        clearInitState: ticketResetForm
    }}>
        {children}
    </TicketContext.Provider>
}