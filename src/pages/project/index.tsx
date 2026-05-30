import Button from "@/components/Button";
import Pagination from "@/components/Pagination/Pagination";
import { NavLink } from "react-router-dom";
import CreateProject from "./create/create.project";
import { useContext } from "react";
import { ModalContext } from "@/contexts";
import ProjectList from "./list/project.list";


export default function ProjectIndex(){
    const { open } = useContext(ModalContext)
   
      
    const handleModal = () => {
        open({
            component: CreateProject,
            props: {
               config:{
                // errors: ProjectErrors,
                // messages: ProjectMessages,
                // isLoading : isProjectLoading
               },
               onSubmit : () => false,
               handleChange : () => false,
               formData: {}
            },
            position: "right"
        });
    }
    return (
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
    )
}