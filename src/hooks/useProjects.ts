import { ProjectService } from "@/services/ProjectService";
import { useEffect, useMemo, useState, type FormEvent } from "react";
import useInputHandler from "./useInputHandler";
import type { NewProjectDataProps } from "@/types/FormDataTypes";
import { NewProjectData } from "@/constants/initProjectStates";
import type { ProjectResponseProps } from "@/types/ResponseTypes";
import type { ProjectContextProps } from "@/types/ContextTypes";
import axios from "axios";



export default function useProjects(){
    const [list ,setList] = useState<ProjectResponseProps[]>([]);
    const {  initStateForm  , handleInput ,resetForm } = useInputHandler<NewProjectDataProps>({ formData : NewProjectData });
    const [errors , setErrors] = useState<Array<string>>([]);
    const [messages,setMessages] = useState<string | null>(null);
    const [isLoading ,setIsLoading] = useState<boolean>(false);

    const handleSubmit = async (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await ProjectService.create(initStateForm);
            const { data , message } = await response.data;
            
            if(response){
                setList( (prev) => [ ...prev,data] );
                setMessages(message);
            }
        } catch (error) {
            if(axios.isAxiosError(error)){
                const err = error.response?.data;
                if(err){
                    setErrors(err.error);
                } 
            }else {
                setErrors((prev) => [...prev,error?.message]);

            }
        } finally {
            setIsLoading(false);
            resetForm();
        }
    }

    const handleDelete = async (id : number) => {
        setIsLoading(true);
        try {
            const action = confirm("Are you sure you want to delete this project?");
            if(!action) return;
            const response = await ProjectService.delete(id);
            if(response){
                setMessages(response.data.message);
                setList( (prev) => prev.filter( (data) => data.id != id))
            }
        } catch (error) {
            if(error instanceof Error) setErrors((prev) => [...prev,error.message]);            
        } finally {
            setIsLoading(false);
        }
    }


    const projectContextProvider : ProjectContextProps = useMemo( () => ({
            isProjectLoading : isLoading,
            ProjectInitState : initStateForm,
            ProjectHandleInput : handleInput,
            ProjectSubmitHandler : handleSubmit,
            ProjectList : list,
            ProjectErrors : errors,
            ProjectMessages : messages,
            ProjectHandleDelete : handleDelete
    }),[list,errors,initStateForm,isLoading,messages]);

    useEffect( () => {
        const getList = async () => {
            setIsLoading(true)
            try {
                const response = await ProjectService.list();
                const { data , message } = await response.data
                if(data){
                    setList(data)
                    setMessages(message);
                }
            } catch (error) {
                if(error instanceof Error){
                    setErrors( (prev) => [...prev,error.message]);
                }
            } finally {
                setIsLoading(false);
            }
        }

        getList();

      
    },[])
    

    return {
       list,
       setList,
       initStateForm,
       handleInput,
       errors,
       messages,
       isLoading,
       handleSubmit,
       projectContextProvider

    }
}