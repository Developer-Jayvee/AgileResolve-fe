import useTickets from "@/hooks/useTickets";
import type { TicketContextProps } from "@/types/ContextTypes";
import { createContext, type ReactNode } from "react";

interface ProviderProps {
    children : ReactNode;
}

export const TicketContext = createContext<TicketContextProps | null>(null);


export default function TicketContextProvider({ children } : ProviderProps){

    const { ticketContextProvider } = useTickets()

    
    return <TicketContext.Provider value={ticketContextProvider}>
        {children}
    </TicketContext.Provider>
}