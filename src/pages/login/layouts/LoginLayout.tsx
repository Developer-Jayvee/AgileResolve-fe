import useAuthorizeRoute from "@/hooks/useAuthorizeRoute";
import { Navigate, Outlet } from "react-router-dom";


export default function LoginLayout(){
    const { isAuthorized } = useAuthorizeRoute()
    
    if(isAuthorized === null) return null;
    if(isAuthorized) return <Navigate to="/client" replace/>
    
    return <Outlet/>
}