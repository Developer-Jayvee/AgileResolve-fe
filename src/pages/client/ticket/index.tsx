import TicketContextProvider from "@/contexts/TicketFormContext";
import { Outlet } from "react-router-dom";


export default function TicketClient(){
    return <TicketContextProvider>
        <Outlet/>
    </TicketContextProvider>
}