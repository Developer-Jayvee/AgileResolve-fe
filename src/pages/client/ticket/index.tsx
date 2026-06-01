import { TicketContext } from "@/contexts";
import useTickets from "@/hooks/useTickets";
import { Outlet } from "react-router-dom";


export default function TicketClient(){
    const { ticketContextProvider } = useTickets()
    return <TicketContext.Provider value={ticketContextProvider}>
        <Outlet/>
    </TicketContext.Provider>
}