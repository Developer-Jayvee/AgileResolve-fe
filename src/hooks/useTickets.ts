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
            if(initStateForm.id !== undefined) await updateCallBack();
            else await createCallBack();
           
        } catch(err) {
            ErrorWrapperUtil({error : err , setErrorState : setErrors});
        } finally {
            setLoading(false);
        }
    }
    const createCallBack = async () => {
        try {
            const response = await TicketService.create(initStateForm);
            const { data , message } = await response?.data;
            if(data){
                setList( (prev) => [...prev,data]);
                resetForm();
                navigate(`/client/project/${projects_id}`);
            }
        } catch (error) {
            throw error;
        }
    }
    const updateCallBack = async () => {
        try {
            if(!initStateForm.id) throw new Error("Missing Ticket ID.");
            const response = await TicketService.update(Number(initStateForm.id),initStateForm);
            const { data , message } =  await response?.data;
            console.log(data);
            
            if(data) {
                setList( (prev) => prev.map( (items) => items.id == initStateForm.id ? data : items  ));
                navigate(`/client/project/${projects_id}`);
                resetForm();
            }
        } catch (error) {
            throw error;
        }
    }
    const handleDelete = async ( id : number ) => {
        setLoading(true);
        try {
            const response = await TicketService.delete(id);
            if(response){
                setList( (prev) => prev.filter((item) => item.id !== id));
                navigate(`/client/project/${projects_id}`);
                resetForm();
            }
        } catch (error) {
            ErrorWrapperUtil({error , setErrorState : setErrors});
        } finally {
            setLoading(false)
        }
    }
    const ticketContextProvider = useMemo<TicketContextProps>( () => ({
        ticketList : list,
        ticketErrors : errors,
        ticketIsLoading : isLoading,
        ticketHandleInput: handleInput,
        ticketInitStateForm : initStateForm,
        ticketSetInitStateForm : setInitStateForm,
        ticketHandleSubmit: handleSumbit,
        ticketSetProjectID : setProjectID,
        ticketDelete : handleDelete
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
        ticketContextProvider,
        ticketErrors : errors,
        ticketHandleInput: handleInput,
        ticketInitStateForm : initStateForm,
        ticketHandleSubmit: handleSumbit,
        ticketSetProjectID : setProjectID,
        ticketResetForm : resetForm
    }
}