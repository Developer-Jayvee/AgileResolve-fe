import ProjectLayout from "../../layouts/ProjectLayout";
import type { PayloadProjectProps } from "@/types/ProjectServiceTypes";
import { useContext } from "react";
import { ProjectContext } from "@/contexts";

const CreateProject = () => {
  const {
    handleProjectSubmit :handleSubmit,
    handleProjectInput : handleInput,
    errors,
    isLoading,
    initProjectStateForm : initStateForm,
    successMessage,
  } = useContext(ProjectContext);

  return (
    <ProjectLayout<PayloadProjectProps,Array<[]>>
    onSubmit={handleSubmit}
    handleInput= {handleInput}
    config={{
        successMessage:successMessage,
        formData:initStateForm,
        errors,
        isLoading
        
    }}
    />
  );
};

export default CreateProject;
