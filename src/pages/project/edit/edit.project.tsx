import DefaultSelect from "@/components/DefaultSelect";
import { type ProjectFormProps } from "../components/layouts/project.form";
import DefaultInputText from "@/components/DefaultInputText";
import DefaultTextArea from "@/components/DefaultTextArea";
import Button from "@/components/Button";
import type { PayloadProjectProps } from "@/types/ProjectServiceTypes";
import { useParams } from "react-router-dom";

interface EditProjectProps extends Omit<ProjectFormProps, "onSubmit | formData">{
    formData: PayloadProjectProps;
    onUpdate: (id: number, formData: PayloadProjectProps) => void;

} 
export default function EditProjectModalContent({
    config,
    onUpdate,
    handleChange,
    formData,
}: EditProjectProps) {
    const { id } = useParams();
    return (
        <>
            <div className="">
                <h1 className="font-medium text-2xl">{config.title}</h1>
                <p className="font-light text-sm">{config.description} </p>
            </div>
            <div className=" mt-5  h-full">
                <DefaultSelect
                    hasErrors={config.errors?.category}
                    label={{ labelName: "Category" }}
                    input={{
                        placeholder: "Choose a project category",
                        onChangeInput: (e) => handleChange("category", e.target.value),
                        defaultName: "",
                        defaultValue: String(formData.category),
                        options: [
                            {
                                keyValue: "1",
                                defaultValue: "Web Development",
                            },
                        ],
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
                    onClick={() => onUpdate(Number(id), formData)}
                    isLoading={config.isLoading ?? false}
                    buttonType="button"
                    buttonText="Submit"
                    customClass="w-full bg-primary text-white font-medium py-1 px-2 mt-4 rounded-md"
                ></Button>
                {config.messages && (
                    <p className="text-sm text-center text-green-500">
                        {config.messages}
                    </p>
                )}
            </div>
        </>
    );
}
