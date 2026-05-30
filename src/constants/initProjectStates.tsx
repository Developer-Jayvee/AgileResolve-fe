import type { ProjectContextProps } from "@/types/ContextTypes";
import type { NewProjectDataProps } from "@/types/FormDataTypes";
import type { ProjectResponseProps } from "@/types/ResponseTypes";


export const NewProjectData : NewProjectDataProps = {
    title:"",
    description:"",
    category:"",
    client_id: null
}
export const ResponseProjectData : ProjectResponseProps  = {
        title: "",
        client_id: 0,
        description: "",
        category: "",
        code: "",
        id: 0,
        updated_at:"",
        created_at:""
}

export const ProjectContextStates: ProjectContextProps = {
     isProjectLoading : false, 
    ProjectInitState : NewProjectData,
    ProjectHandleInput : (key  , value) => false,
    ProjectSubmitHandler : (e) => false,
    ProjectList : [ResponseProjectData],
    ProjectErrors : [],
    ProjectMessages : null
}