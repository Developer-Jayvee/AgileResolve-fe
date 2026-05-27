import { useEffect, useMemo, useState } from "react";
import useAuthorizeRoute from "./useAuthorizeRoute";
import useProjectHandler from "./useProjectHandler";
import type { StoreProjectResponseProps } from "@/types/ProjectServiceTypes";
import { initStoreResponse } from "@/constants/initStates";
import useModal from "./useModal";
import useTicket from "./useTicket";


export default function useClient() {
    const { isAuthorized } = useAuthorizeRoute()
    const { getProjectList, response } = useProjectHandler();
    const { modalComponent , modalPosition , modalProps , modalSize ,open , close } = useModal()
    const [projectList, setProjectList] = useState<StoreProjectResponseProps[]>([initStoreResponse]);
    const { formResponse , handleSubmit , initStateForm ,formLoading , handleInput } = useTicket();

    const modalContextProvider = ({
        open,
        close
    });
    const projectContext = useMemo(() => ({
        list: projectList,
        setList: setProjectList
    }), [projectList]);
    
    const ticketContext = useMemo( () => ({
        handleSubmit,
        initStateForm,
        formLoading,
        handleInput
    }),[initStateForm]);

    useEffect( () => {
        if(formResponse){
            console.log(formResponse);
            
            setProjectList( 
                (prev) => prev.map( (data) => 
                    formResponse.projects_id == data.id ? 
                    { ...data ,
                        tickets: [...data.tickets,formResponse]
                    } : data
                )
            );
        }
    },[formResponse])
 
    return {
        isAuthorized,
        getProjectList, response,
        setProjectList,
        closeModal : close,
        modalPosition,
        modalComponent,
        modalProps,
        modalContextProvider,
        modalSize,
        projectContext,
        ticketContext
    }

}