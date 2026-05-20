import {  useState, type FormEvent } from "react";
import useInputHandler from "./useInputHandler";
import type { StoreProjectResponseProps, PayloadProjectProps } from "@/types/ProjectServiceTypes";
import { ProjectService } from "@/services/ProjectService";

export default function useProjectHandler(){
    const formData = {
        category : null,
        title : "",
        description : "",
        client_id:1
    }
    const [errors , setErrors] = useState([]);
    const [successMessage,setSuccessMessage] = useState<string | null>(null);
    const [isLoading ,setIsLoading] = useState<boolean>(false);
    const [response,setResponse] = useState<StoreProjectResponseProps[]>([]);
    const { handleInput , initStateForm , setInitStateForm } = useInputHandler<PayloadProjectProps>({formData})
    
    const handleSubmit = async (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrors([]);
        setIsLoading(true);
        setSuccessMessage(null)

        await ProjectService.create(initStateForm)
        .then((result) => {
            const { data , message } = result.data;
            if(data){
                setResponse( (prev) => [...prev , data ]);
                setInitStateForm(formData);
                setSuccessMessage(result.message)
            }
        })
        .catch((error ) => {
            if(error.response){
                const errorResponse = error.response.data?.error;
                setErrors(errorResponse);
            }
        })
        .finally(() => {
            setIsLoading(false);
        })
        
    }
    const getProjectList = async () => {
        const response = await ProjectService.list();
        const { data} = response?.data
        if(data){
            setResponse(data);
        }
    }

    const deleteProject = async (id : number) => {
        const action = confirm("Are you sure you want to delete this project?");
        if(!action) return;

       return await ProjectService.delete(id)
       .then((result) => result.data)
       .catch((error) => false)
    }
    return {
        handleInput,
        handleSubmit,
        getProjectList,
        deleteProject,
        successMessage,
        initStateForm,
        errors,
        response,
        isLoading
    }
}