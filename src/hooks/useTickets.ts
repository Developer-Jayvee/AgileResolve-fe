import type { TicketResponseProps } from "@/types/ResponseTypes";
import TicketService from "@/services/TicketService";
import { useEffect, useMemo, useState } from "react";
import { TicketListState } from "@/constants/initTicketStates";
import type { TicketContextProps } from "@/types/ContextTypes";

export default function useTickets(){
    const [ list ,setList ] = useState<TicketResponseProps[]>(TicketListState);
    const [ isLoading , setLoading ] = useState<boolean>(false);

    const fetchTickets = async () => {
        setLoading(true);
        try {
            const response = await TicketService.list();
            const { data , message } = await response.data
            if(data){
                setList(data)
            }

        }catch ( err) {
            setList([])
        } finally {
            setLoading(false);
        }
    }


    const ticketContextProvider = useMemo<TicketContextProps>( () => ({
        ticketList : list,
        ticketIsLoading : isLoading
    }),[])


    useEffect( () => {
        fetchTickets();
        
        return () => {
            setList([]);
        }
    }, []);

    return {
        ticketList : list,
        ticketIsLoading : isLoading,
        ticketContextProvider
    }
}