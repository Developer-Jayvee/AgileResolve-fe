import AsideBar from "@/components/layouts/AsideBar";
import RightModal from "@/components/layouts/RightModal";
import TopNav from "@/components/layouts/TopNav";
import useAuthorizeRoute from "@/hooks/useAuthorizeRoute";
import useProjectHandler from "@/hooks/useProjectHandler";
import type { ProjectContextProps, RightModalContextProps } from "@/types/ContextTypes";
import type { StoreProjectResponseProps } from "@/types/ProjectServiceTypes";
import { createContext, type ReactNode, useEffect, useMemo, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";


export const RightModalContext = createContext<RightModalContextProps>({
    isOpen : false,
    setOpen : () => false,
    setChildren : () => <></>
});
export const ProjectContext = createContext<ProjectContextProps>({
    list : [],
    setList : () => []
});
export default function ClientLayout(){
    const {  isAuthorized } = useAuthorizeRoute()
    const { getProjectList, response } = useProjectHandler();
    const [isRightModalOpen , setRightModalOpen] = useState<boolean>(false);
    const [modalContent , setModalContent] = useState<ReactNode >(<></>);
    const [projectList , setProjectList] = useState<StoreProjectResponseProps[]>([]);


    const modalContext = useMemo( () => ({
        isOpen : isRightModalOpen,
        setOpen : setRightModalOpen,
        setChildren : setModalContent
    }),[isRightModalOpen]);

    const projectContext = useMemo( () => ({
        list : projectList,
        setList : setProjectList
    }),[projectList]);


    useEffect( () => {
        getProjectList()
    },[])

    useEffect( () => {
        setProjectList(response);
        console.log(response);
        
    },[response])


    if(isAuthorized === null) return null;
    if(!isAuthorized) return <Navigate to="/" replace/>
    return (
        <div className="h-screen w-full bg-neutral">
            <AsideBar/>
            <TopNav/>
            <ProjectContext.Provider value={projectContext}>
                <RightModalContext.Provider value={modalContext}>
                    <main className="pl-40 pt-12 h-full">
                        <Outlet/>
                    </main>
                    <RightModal isOpen={isRightModalOpen}>
                        {modalContent}
                    </RightModal>
                </RightModalContext.Provider>
            </ProjectContext.Provider>
        </div>
    )
}