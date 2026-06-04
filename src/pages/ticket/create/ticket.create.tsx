import { useContext, useEffect } from "react";
import TicketForm from "../layouts/ticket.form";
import { TicketContext } from "@/contexts";
import { useParams } from "react-router-dom";


export default function TicketCreate(){
    const { project_id } = useParams()
    const {
        ticketInitStateForm,
        ticketHandleInput,
        ticketHandleSubmit,
        ticketIsLoading,
        ticketSetProjectID,
        ticketErrors
    } = useContext(TicketContext);

    useEffect(() => {
        if(project_id) ticketSetProjectID(Number(project_id));
    },[project_id])

    if(!project_id) return null;
    return <TicketForm
            errors={ticketErrors}
            handleInput={ticketHandleInput}
            handleSubmit={ticketHandleSubmit}
            initStateForm={ticketInitStateForm}
            isLoading={ticketIsLoading}
            />
}