import AsideBar from "@/components/layouts/AsideBar";
import Modal from "@/components/layouts/Modal";
import TopNav from "@/components/layouts/TopNav";
import { ProjectContext, ModalContext, TicketContext } from "@/contexts";
import useClient from "@/hooks/useClient";
import {  useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";



export default function ClientLayout(){
    const {
        isAuthorized,
        getProjectList, response,
        modalPosition,
        modalProps,
        modalComponent,
        modalContextProvider,
        modalSize,
        projectContext,
        ticketContext,
        setProjectList,
        closeModal
    } = useClient();
  


    useEffect( () => {
        getProjectList()
    },[])
    useEffect( () => setProjectList(response),[response])


    if(isAuthorized === null) return null;
    if(!isAuthorized) return <Navigate to="/" replace/>
    const ModalComponent = modalComponent; 
    return (
        <div className="h-screen w-full bg-neutral">
            <AsideBar/>
            <TopNav/>
            <ProjectContext.Provider value={projectContext}>
                <TicketContext.Provider value={ticketContext}>
                    <ModalContext.Provider value={modalContextProvider}>
                        <main className="pl-40 pt-12 h-full">
                            <Outlet/>
                        </main>
                        
                    {
                        modalComponent ? (
                            <Modal 
                                size={modalSize}
                                closeModal={closeModal}
                                position={modalPosition}
                                config={{
                                    component: ModalComponent,
                                    props: modalProps
                                }}
                            />
                        ) : ''
                    }
                    </ModalContext.Provider>
                </TicketContext.Provider>
            </ProjectContext.Provider>
        </div>
    )
}