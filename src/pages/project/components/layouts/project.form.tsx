import Button from "@/components/Button";
import DefaultInputText from "@/components/DefaultInputText";
import DefaultSelect from "@/components/DefaultSelect";
import DefaultTextArea from "@/components/DefaultTextArea";
import type { NewProjectDataProps } from "@/types/FormDataTypes";
import {  type FormEvent } from "react";


export interface ProjectFormProps {
    config : {
        errors: any;
        messages: any;
        isLoading : boolean;
    };
    formData : NewProjectDataProps;
    handleChange : (key : keyof NewProjectDataProps , value : number | string) => void;
    onSubmit : (e : FormEvent<HTMLFormElement>) => void;
}
export default function ProjectForm({
    onSubmit , handleChange , formData , config 
} : ProjectFormProps){
    return (
            <>
                <div className="">
                    <h1 className="font-medium text-2xl">New Project</h1>
                    <p className="font-light text-sm">Propose a new project </p>
                </div>
                <div className=" mt-5  h-full">
                    <form onSubmit={onSubmit} className="flex flex-col gap-2">
                        <DefaultSelect
                            hasErrors={config.errors?.category}
                            label={{ labelName: "Category" }}
                            input={{
                                placeholder: "Choose a project category",
                                onChangeInput: (e) => handleChange("category", e.target.value),
                                defaultName: "",
                                defaultValue: String(formData.category),
                                options: [{
                                    keyValue: "1", defaultValue: "Web Development"
                                }]
                            }}
                        />
                        <DefaultInputText
                            hasErrors={config.errors?.title}
                            label={{ labelName: "Title" }}
                            input={{
                                defaultName: "title",
                                placeholder: "Project Title",
                                defaultValue: formData.title,
                                onChangeInput: (e) => handleChange("title", e.target.value),
                            }}
                            isRequired={true}
                        />
                        <DefaultTextArea
                            hasErrors={config.errors?.description}
                            label={{ labelName: "Description" }}
                            textarea={{
                                placeholder: "Project Description",
                                defaultName: "description",
                                defaultTextAreaValue: formData.description,
                                onChangeInput: (e) => handleChange("description", e.target.value),
                            }}
                            isRequired={true}
                        />
                        <Button
                            isLoading={config.isLoading ?? false}
                            buttonType="submit"
                            buttonText="Submit"
                            customClass="w-full bg-primary text-white font-medium py-1 px-2 mt-4 rounded-md"
                        ></Button>
                        {
                            config.messages && (
                                <p className="text-sm text-center text-green-500">{config.messages}</p>
                            )
                        }
                    </form>
                </div>
            </>
    )
}