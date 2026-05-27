import Button from "@/components/Button";
import DefaultInputText from "@/components/DefaultInputText";
import DefaultSelect from "@/components/DefaultSelect";
import DefaultTextArea from "@/components/DefaultTextArea";
import type { FormEvent } from "react";


interface ProjectDetailedProps<F,E> {
    formData: F;
    isLoading : boolean;
    errors: E;
    successMessage: string | null;
}
interface ProjectLayoutProps<F, E> {
    onSubmit: (e: FormEvent<HTMLFormElement>) => void;
    handleInput: (key: keyof F, value: string | number) => void;
    config : ProjectDetailedProps<F,E>;
}
export default function ProjectLayout<F, E>({
    onSubmit, handleInput, config
}: ProjectLayoutProps<F, E>) {

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
                            onChangeInput: (e) => handleInput("category", e.target.value),
                            defaultName: "",
                            defaultValue: String(config.formData.category),
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
                            defaultValue: config.formData.title,
                            onChangeInput: (e) => handleInput("title", e.target.value),
                        }}
                        isRequired={true}
                    />
                    <DefaultTextArea
                        hasErrors={config.errors?.description}
                        label={{ labelName: "Description" }}
                        textarea={{
                            placeholder: "Project Description",
                            defaultName: "description",
                            defaultTextAreaValue: config.formData.description,
                            onChangeInput: (e) => handleInput("description", e.target.value),
                        }}
                        isRequired={true}
                    />
                    <Button
                        isLoading={config.isLoading}
                        buttonType="submit"
                        buttonText="Submit"
                        customClass="w-full bg-primary text-white font-medium py-1 px-2 mt-4 rounded-md"
                    ></Button>
                    {
                        config.successMessage && (
                            <p className="text-sm text-center text-green-500">{config.successMessage}</p>
                        )
                    }
                </form>
            </div>
        </>
    )
}