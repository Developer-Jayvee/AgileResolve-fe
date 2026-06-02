import { useContext, useEffect } from "react";
import TicketCreateLayout from "./layouts/ticket.create.layout";
import { TicketContext } from "@/contexts";
import { useParams } from "react-router-dom";


export default function TicketCreate(){
    const { project_id } = useParams()
    const {
        ticketInitStateForm,
        ticketHandleInput,
        ticketHandleSubmit,
        ticketIsLoading,
        ticketSetProjectID
    } = useContext(TicketContext);

    useEffect(() => {
        if(project_id) ticketSetProjectID(Number(project_id));
    },[project_id])

    if(!project_id) return null;
    return <TicketCreateLayout
            handleInput={ticketHandleInput}
            handleSubmit={ticketHandleSubmit}
            initStateForm={ticketInitStateForm}
            isLoading={ticketIsLoading}
            />
}