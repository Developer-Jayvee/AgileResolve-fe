import type { PayloadTicketProps } from "@/types/PayloadTypes";
import useInputHandler from "./useInputHandler";
import { initPayloadTicket } from "@/constants/initStates";
import useSubmitForm from "./useSubmitForm";
import TicketService from "@/services/TicketService";
import type { TicketReturnType } from "@/types/TicketTypes";
import useReturnList from "./useReturnList";


export default function useTicket(){
    const { handleInput , initStateForm } = useInputHandler<PayloadTicketProps>({ formData : {
        ...initPayloadTicket,
        projects_id:"1",
        created_by:"1"
    } })
    const { dataList , setDataList ,  isLoading : listLoading } = useReturnList<TicketReturnType>({
        service : TicketService.list
    });
    const { handleSubmit ,isLoading : formLoading , errorResponse , formResponse } = useSubmitForm<PayloadTicketProps,TicketReturnType>({
        service : TicketService.create,
        payload : initStateForm,
        appendToList : true,
        setList : setDataList
    });

    return {
        handleInput,
        handleSubmit,
        listLoading,
        formResponse,
        formLoading,
        initStateForm,
        errorResponse,
        dataList
    }
}