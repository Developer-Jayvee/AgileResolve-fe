import type { TicketResponseProps } from "@/types/ResponseTypes";
import TicketService from "@/services/TicketService";
import { useEffect, useMemo, useState, type FormEvent } from "react";
import { PayloadTicketState, TicketListState } from "@/constants/initTicketStates";
import type { TicketContextProps } from "@/types/ContextTypes";
import useInputHandler from "./useInputHandler";
import type { PayloadTicketProps } from "@/types/PayloadTypes";
import ErrorWrapperUtil from "@/utils/error.wrapper.uti";
import { useNavigate } from "react-router-dom";

export default function useTickets(){
    const navigate = useNavigate();
    const [ list ,setList ] = useState<TicketResponseProps[]>(TicketListState);
    const [ isLoading , setLoading ] = useState<boolean>(false);
    const [ errors , setErrors ] = useState<any | null>(null);
    const [projects_id,setProjectID] = useState<number | null>(null);
    const { handleInput , initStateForm , setInitStateForm, resetForm } = useInputHandler<PayloadTicketProps>({
        formData:{
            ...PayloadTicketState,
            projects_id:1,
            created_by:1
        }
    })
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
    const handleSumbit = async (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        try{
            const response = await TicketService.create(initStateForm);
            const { data , message } = await response?.data;
            if(data){
                setList( (prev) => [...prev,data]);
                resetForm();
                navigate(-1)
            }
        } catch(err) {
            ErrorWrapperUtil({error : err , setErrorState : setErrors});
        } finally {
            setLoading(false);
        }
    }
    const ticketContextProvider = useMemo<TicketContextProps>( () => ({
        ticketList : list,
        ticketErrors : errors,
        ticketIsLoading : isLoading,
        ticketHandleInput: handleInput,
        ticketInitStateForm : initStateForm,
        ticketHandleSubmit: handleSumbit,
        ticketSetProjectID : setProjectID,
    }),[list,isLoading,initStateForm]);


    useEffect(() => {
        if(projects_id) setInitStateForm((prev) => ({...prev,projects_id}));
    },[projects_id])

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