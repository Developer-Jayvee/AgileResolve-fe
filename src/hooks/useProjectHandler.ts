import {  useState, type Dispatch, type FormEvent, type SetStateAction } from "react";
import useInputHandler from "./useInputHandler";
import type { StoreProjectResponseProps, PayloadProjectProps } from "@/types/ProjectServiceTypes";
import { ProjectService } from "@/services/ProjectService";

interface ProjectHandlerProps {
    setProjectList ?: Dispatch<SetStateAction<StoreProjectResponseProps[]>>;
}
export default function useProjectHandler({
    setProjectList = () => []
} : ProjectHandlerProps){
    const formData = {
        id : undefined,
        category : null,
        title : "",
        description : "",
        client_id:1
    }
    const [errors , setErrors] = useState([]);
    const [successMessage,setSuccessMessage] = useState<string | null>(null);
    const [isLoading ,setIsLoading] = useState<boolean>(false);
    const { handleInput , initStateForm , setInitStateForm } = useInputHandler<PayloadProjectProps>({formData})
    const [projectID , setProjectID] = useState<number | null>(9);

    const handleSubmit = async (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrors([]);
        setIsLoading(true);
        setSuccessMessage(null)
        try {
            projectID ? 
                await updateCallback(ProjectService.update(projectID,initStateForm)) :
                await createCallback(ProjectService.create(initStateForm))
        } catch (error) {
            
        } finally {
            setIsLoading(false)
        }

    }
    const updateCallback = async (service : any) => {
        return await service
        .then((result) => {
            const {data , message} = result.data;
            if(data){
                setProjectList(
                    (prev) => prev.map((project) => {
                        console.log(project);
                        
                        return project.id === data.id ?
                                data : project
                        
                    } 
                    )
                )
            }
            
        });
        
    }
    const createCallback = async ( service : any ) => {
        return await service
        .then((result) => {
            const { data , message } = result.data;
            if(data){
                setProjectList( (prev) => [...prev , data ]);
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
        
    }
    const getProjectList = async () => {
        const response = await ProjectService.list();
        const { data} = response?.data
        if(data){
            setProjectList(data);
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
        isLoading
    }
}