import AsideBar from "@/components/layouts/AsideBar";
import TopNav from "@/components/layouts/TopNav";
import useAuthorizeRoute from "@/hooks/useAuthorizeRoute";
import { Navigate, Outlet } from "react-router-dom";


export default function ClientLayout(){
    const {  isAuthorized } = useAuthorizeRoute()
    
    if(isAuthorized === null) return null;
    if(!isAuthorized) return <Navigate to="/" replace/>

    return (
        <div className="h-screen w-full bg-neutral">
            <AsideBar/>
            <TopNav/>
            <main className="pl-40 pt-12 h-full">
                <Outlet/>
            </main>
        </div>
    )
}