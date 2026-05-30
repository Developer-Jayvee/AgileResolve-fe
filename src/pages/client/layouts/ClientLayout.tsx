import AsideBar from "@/components/layouts/AsideBar";
import Modal from "@/components/layouts/Modal";
import TopNav from "@/components/layouts/TopNav";
import {   ModalContext } from "@/contexts";
import useAuthorizeRoute from "@/hooks/useAuthorizeRoute";
import useModal from "@/hooks/useModal";
import { Navigate, Outlet } from "react-router-dom";



export default function ClientLayout(){
    const { isAuthorized } = useAuthorizeRoute()
    const {
        modalPosition,
        modalProps,
        modalComponent,
        modalContextProvider,
        modalSize,
        close : closeModal,
    } = useModal();


    if(isAuthorized === null) return null;
    if(!isAuthorized) return <Navigate to="/" replace/>
    const ModalComponent = modalComponent; 
    
    return (
        <div className="h-screen w-full bg-neutral">
            <AsideBar/>
            <TopNav/>
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
        </div>
    )
}