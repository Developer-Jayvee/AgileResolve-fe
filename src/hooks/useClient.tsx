import { useEffect, useMemo, useState, type ReactNode } from "react";
import useAuthorizeRoute from "./useAuthorizeRoute";
import useProjectHandler from "./useProjectHandler";
import type { StoreProjectResponseProps } from "@/types/ProjectServiceTypes";
import type { ModalSize,  ModalContextProps } from "@/types/ContextTypes";
import { initStoreResponse } from "@/constants/initStates";
import useModal from "./useModal";


export default function useClient() {
    const { isAuthorized } = useAuthorizeRoute()
    const { getProjectList, response } = useProjectHandler();
    const { modalContext , modalContent } = useModal()
    
    const [projectList, setProjectList] = useState<StoreProjectResponseProps[]>([initStoreResponse]);

    const projectContext = useMemo(() => ({
        list: projectList,
        setList: setProjectList
    }), [projectList]);

   
    return {
        isAuthorized,
        getProjectList, response,
        setProjectList,
        modalContent,
        modalContext,
        projectContext,
    }

}