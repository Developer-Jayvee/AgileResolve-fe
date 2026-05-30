import ProjectForm, { type ProjectFormProps } from "../components/layouts/project.form";


export default function CreateProject({ config ,  onSubmit , handleChange , formData  } : ProjectFormProps){
    return (<>
        <ProjectForm
            config={config}
            onSubmit={onSubmit}
            handleChange={handleChange}
            formData={formData}
        />
    </>)
}