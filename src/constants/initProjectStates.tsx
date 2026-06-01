import type { ProjectContextProps } from "@/types/ContextTypes";
import type { PayloadProjectProps } from "@/types/ProjectServiceTypes";
import type { ProjectResponseProps } from "@/types/ResponseTypes";


export const NewProjectData: PayloadProjectProps = {
    title: "",
    description: "",
    category: null,
    client_id: 1
}
export const ResponseProjectData: ProjectResponseProps = {
    title: "",
    client_id: 0,
    description: "",
    category: null,
    code: "",
    id: 0,
    updated_at: "",
    created_at: ""
}

export const ProjectContextStates: ProjectContextProps = {
    isProjectLoading: false,
    ProjectInitState: NewProjectData,
    ProjectHandleInput: (key, value) => false,
    ProjectSubmitHandler: (e) => false,
    ProjectList: [ResponseProjectData],
    ProjectErrors: [],
    ProjectMessages: null
}