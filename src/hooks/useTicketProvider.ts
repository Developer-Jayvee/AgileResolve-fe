import { TicketContext } from "@/contexts/TicketFormContext";
import { useContext } from "react";


export default function useTicketProvider(){
    const context = useContext(TicketContext);

    if(context === null) console.warn('This component is not within the context');

    return context;
}