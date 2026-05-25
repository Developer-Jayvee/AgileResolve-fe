import Button from "@/components/Button";
import DefaultInputText from "@/components/DefaultInputText";
import DefaultTextArea from "@/components/DefaultTextArea";
import useProjectHandler from "@/hooks/useProjectHandler";
import { useContext, useEffect } from "react";
import DefaultSelect from "@/components/DefaultSelect";
import { ProjectContext } from "@/contexts";

const CreateProject = () => {
    const { setList } = useContext(ProjectContext);
    const { handleSubmit, handleInput, errors, response, isLoading , initStateForm , successMessage } = useProjectHandler();
    useEffect(() => {
        if(response.length > 0){
            setList((prev) => [...prev,response[0]]);
        }
    }, [response])

    return (
        <>
            <div className="">
                <h1 className="font-medium text-2xl">New Project</h1>
                <p className="font-light text-sm">Propose a new project </p>
            </div>
            <div className=" mt-5  h-full">
                <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                    <DefaultSelect
                        hasErrors={errors?.category}
                        label={{ labelName:"Category" }}
                        input={{ 
                            placeholder:"Choose a project category",
                            onChangeInput: (e) => handleInput("category",e.target.value),
                            defaultName:"",
                            defaultValue:String(initStateForm.category),
                            options:[{
                                keyValue:"1", defaultValue:"Web Development"
                            }] 
                         }}
                    />
                    <DefaultInputText
                        hasErrors={errors?.title}
                        label={{ labelName: "Title" }}
                        input={{
                            defaultName: "title",
                            placeholder: "Project Title",
                            defaultValue:initStateForm.title,
                            onChangeInput: (e) => handleInput("title", e.target.value),
                        }}
                        isRequired={true}
                    />
                    <DefaultTextArea
                        hasErrors={errors?.description}
                        label={{ labelName: "Description" }}
                        textarea={{
                            placeholder:"Project Description",
                            defaultName: "description",
                            defaultTextAreaValue: initStateForm.description,
                            onChangeInput: (e) => handleInput("description", e.target.value),
                        }}
                        isRequired={true}
                    />
                    <Button
                        isLoading={isLoading}
                        buttonType="submit"
                        buttonText="Submit"
                        customClass="w-full bg-primary text-white font-medium py-1 px-2 mt-4 rounded-md"
                    ></Button>
                    {
                        successMessage && (
                            <p className="text-sm text-center text-green-500">{successMessage}</p>
                        )
                    }
                </form>
            </div>
        </>
    );
};

export default CreateProject;
