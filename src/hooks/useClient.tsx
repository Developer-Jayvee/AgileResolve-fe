import { useEffect, useMemo, useState } from "react";
import useAuthorizeRoute from "./useAuthorizeRoute";
import useProjectHandler from "./useProjectHandler";
import type { StoreProjectResponseProps } from "@/types/ProjectServiceTypes";
import { initStoreResponse } from "@/constants/initStates";
import useModal from "./useModal";
import useTicket from "./useTicket";


export default function useClient() {
    const [projectID, setProjectID] = useState<string>("");
    const { isAuthorized } = useAuthorizeRoute()
    const { modalComponent, modalPosition, modalProps, modalSize, open, close } = useModal()
    const [projectList, setProjectList] = useState<StoreProjectResponseProps[]>([initStoreResponse]);
    const { 
        getProjectList,
        handleSubmit : handleProjectSubmit,
        handleInput : handleProjectInput,
        errors,
        isLoading,
        initStateForm : initProjectStateForm,
        successMessage
    } = useProjectHandler({
            setProjectList
        });
    const { formResponse, handleSubmit, initStateForm, formLoading, handleInput } = useTicket({
        projectID
    });

    const modalContextProvider = ({
        open,
        close
    });
    const projectContext = useMemo(() => ({
        list: projectList,
        setList: setProjectList,
        setProjectID,
        handleProjectSubmit,
        handleProjectInput,
        getProjectList,
        errors,
        isLoading,
        initProjectStateForm,
        successMessage
    }), [projectList, initProjectStateForm, projectID]);

    const ticketContext = useMemo(() => ({
        handleSubmit,
        initStateForm,
        formLoading,
        handleInput,
    }), [initStateForm]);

    useEffect(() => {
        if (formResponse) {
            setProjectList(
                (prev) => prev.map((data) =>
                    formResponse.projects_id == data.id ?
                        {
                            ...data,
                            tickets: [...data.tickets, formResponse]
                        } : data
                )
            );
        }
    }, [formResponse])


    return {
        isAuthorized,
        getProjectList,
        setProjectList,
        closeModal: close,
        setProjectID,
        modalPosition,
        modalComponent,
        modalProps,
        modalContextProvider,
        modalSize,
        projectContext,
        ticketContext
    }

}