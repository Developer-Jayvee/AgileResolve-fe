import useProjects from "@/hooks/useProjects";
import ProjectViewHeader from "./project.header";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { BiPlus } from "react-icons/bi";
import type { ProjectResponseProps } from "@/types/ResponseTypes";
import { ResponseProjectData } from "@/constants/initProjectStates";
import TicketTable from "@/pages/ticket/list/ticket.table";


export default function ProjectView(){
    const { list } = useProjects();
    const { id  } = useParams();
    const [info ,setInfo] = useState<ProjectResponseProps | null>(ResponseProjectData);

    useEffect( () => {
        if(id && list) {
            setInfo(list.find( (data) => data.id == Number(id)) ?? null);
        }
    },[id,list])

    if(!info) return null;

    return <div className=" h-full p-2">
            <div className="grid grid-rows-[150px_1fr] w-full h-full bg-white border border-gray-300 shadow-2xl">
                <ProjectViewHeader data={{
                    title: info.title,
                    description: info.description,
                    created_at: info.created_at
                }} />
                <div className="h-full p-3">
                    <div className="w-full flex flex-col gap-5">
                        <div className="flex justify-end">
                            <div>
                                <button  className="flex items-center gap-2 disabled:bg-blue-400 bg-primary hover:bg-secondary rounded-sm  text-white p-2 text-[14px]">
                                    <BiPlus />
                                    <p>Create Ticket</p>
                                </button>
                            </div>
                        </div>
                        <TicketTable/>
                        {/* <TicketsTable list={projectInfo.tickets} /> */}
                    </div>
                </div>
            </div>
        </div>
}