import { ACCESS_TOKEN_NAME } from "@/constants";
import { useEffect, useState } from "react";


export default function useAuthorizeRoute(){
    const [isAuthorized , setIsAuthorized] = useState<boolean | null>(null);

    useEffect( () => {
        const token = localStorage.getItem(ACCESS_TOKEN_NAME);
        setIsAuthorized(!!token);
    },[])


    return {
        isAuthorized,setIsAuthorized
    }
}