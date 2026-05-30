import { useContext, useEffect } from "react";
import ProjectForm, { type ProjectFormProps } from "../components/layouts/project.form";
import { ProjectContext } from "@/contexts";


export default function CreateProject({ config ,  onSubmit , handleChange , formData  } : ProjectFormProps){

     const { 
        ProjectErrors,
        ProjectHandleInput,
        isProjectLoading,
        ProjectMessages,
        ProjectSubmitHandler,
        ProjectInitState,
      } = useContext(ProjectContext);

    useEffect(() => {
        console.log(ProjectErrors);
        
    },[ProjectErrors])
    return (<>
        <ProjectForm
            config={{
                isLoading: isProjectLoading,
                errors:ProjectErrors,
                messages: ProjectMessages
            }}
            onSubmit={ProjectSubmitHandler}
            handleChange={ProjectHandleInput}
            formData={ProjectInitState}
        />
    </>)
}