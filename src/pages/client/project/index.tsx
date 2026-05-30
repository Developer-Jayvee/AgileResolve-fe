import { ProjectContext } from "@/contexts";
import useProjects from "@/hooks/useProjects";
import { Outlet } from "react-router-dom";


export default function ProjectClient(){
    const { projectContextProvider } = useProjects();
    return <ProjectContext.Provider value={projectContextProvider}>
        <Outlet/>
    </ProjectContext.Provider>
}