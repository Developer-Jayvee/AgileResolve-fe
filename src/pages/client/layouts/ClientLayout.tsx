import AsideBar from "@/components/layouts/AsideBar";
import CenterModal from "@/components/layouts/CenterModal";
import RightModal from "@/components/layouts/RightModal";
import TopNav from "@/components/layouts/TopNav";
import { ProjectContext, ModalContext } from "@/contexts";
import useClient from "@/hooks/useClient";
import {  useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";



export default function ClientLayout(){
    const {
        isAuthorized,
        getProjectList, response,
        modalContext,
        projectContext,
        setProjectList,
    } = useClient();
  

    useEffect( () => {
        getProjectList()
    },[])
    useEffect( () => setProjectList(response),[response])


    if(isAuthorized === null) return null;
    if(!isAuthorized) return <Navigate to="/" replace/>
    return (
        <div className="h-screen w-full bg-neutral">
            <AsideBar/>
            <TopNav/>
            <ProjectContext.Provider value={projectContext}>
                <ModalContext.Provider value={modalContext}>
                    <main className="pl-40 pt-12 h-full">
                        <Outlet/>
                    </main>
                    <RightModal />
                    <CenterModal/>
                </ModalContext.Provider>
            </ProjectContext.Provider>
        </div>
    )
}