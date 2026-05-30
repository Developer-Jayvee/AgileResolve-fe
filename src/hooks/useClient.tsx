import { useEffect, useState } from "react";
import useProjects from "./useProjects";



export default function useClient() {
    const [isLoading ,setLoading] = useState<boolean>(false);

    const { projectContextProvider , isLoading : isProjectLoading } = useProjects()
   
   

    useEffect( () => setLoading(isLoading),[isProjectLoading]);

    return {
        isLoading,
        projectContextProvider
    }
}