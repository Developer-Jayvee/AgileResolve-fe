import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { StoreProjectResponseProps } from "@/types/ProjectServiceTypes";
import ViewProjectHeader from "./ViewProjectHeader";
import { initStoreResponse } from "@/constants/initStates";
import { ProjectContext } from "@/contexts";


const ViewProject = () => {
    const { list } = useContext(ProjectContext)
    const [projectInfo, setProjectInfo] = useState<StoreProjectResponseProps>(initStoreResponse);
    const { id } = useParams();

    useEffect( () => {
        if(list.length > 0){
            setProjectInfo(
                list.find((item) => item.id === Number(id))
            );
        }
    },[list])
    
    if(projectInfo ===  null) return null;
    
    return <div className=" h-full p-2">
        <div className="grid grid-rows-[150px_1fr] w-full h-full bg-white border border-gray-300 shadow-2xl">
            <ViewProjectHeader project={projectInfo} />
            <div className="h-full"></div>
        </div>
    </div>
}

export default ViewProject;