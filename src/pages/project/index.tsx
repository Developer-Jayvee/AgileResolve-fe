import Button from "@/components/Button";
import Pagination from "@/components/Pagination/Pagination";
import { NavLink } from "react-router-dom";
import CreateProject from "./create/create.project";
import { useContext, useState } from "react";
import ProjectList from "./list/project.list";
import RightModal from "@/components/layouts/RightModal";
import {ProjectContext} from "@/contexts";

//  config : {
//         errors: any;
//         messages: any;
//         isLoading : boolean;
//     };
//     formData : NewProjectDataProps;
//     handleChange : (key : keyof NewProjectDataProps , value : number | string) => void;
//     onSubmit : (e : FormEvent<HTMLFormElement>) => void;


export default function ProjectIndex() {
    const { 
        ProjectErrors,
        ProjectHandleInput,
        isProjectLoading,
        ProjectMessages,
        ProjectSubmitHandler,
        ProjectInitState,
     } = useContext(ProjectContext);
     
    const [isModalOpen, setModalOpen] = useState<boolean>(false);

    const handleModal = () => setModalOpen(true);
    return (
        <>
            <div className=" grid grid-cols-1 grid-rows-[100px_1fr] h-full gap-y-4 p-5">
                <div className="flex justify-between items-center">
                    <div className="leading-5">
                        <h3 className="font-medium text-2xl">Projects</h3>
                        <p className="text-sm font-light">Manage your projects in one place</p>
                    </div>
                    <div>
                        <NavLink to="/create"></NavLink>
                        <Button onClick={() => handleModal()} buttonText="+ New Project" customClass="disabled:bg-blue-400 bg-primary hover:bg-secondary rounded-sm  text-white p-2 text-[14px]" />
                    </div>
                </div>
                <div className="grid grid-cols-1 grid-rows-[1fr_50px] gap-y-6 max-h-full h-full shadow-2xl bg-white p-4 rounded-md">
                    <div className="min-h-0">
                        <ProjectList />
                    </div>
                    <Pagination />
                </div>
            </div>
            <RightModal isModalOpen={isModalOpen} setModalOpen={setModalOpen}>
                <CreateProject config={{
                    errors: ProjectErrors,
                    messages: ProjectMessages,
                    isLoading: isProjectLoading,
                    title: "New Project",
                    description: "Propose a new project" 
                }} 
                formData={ProjectInitState}
                handleChange={ProjectHandleInput}
                onSubmit={ProjectSubmitHandler}
                />                
            </RightModal>
        </> 
    )
}