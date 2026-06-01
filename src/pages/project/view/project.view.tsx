import ProjectViewHeader from "./project.header";
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { BiPlus } from "react-icons/bi";
import type { ProjectResponseProps } from "@/types/ResponseTypes";
import { ResponseProjectData } from "@/constants/initProjectStates";
import TicketTableHeader from "@/pages/ticket/list/ticket.table.header";
import { ProjectContext } from "@/contexts";
import TicketTableData from "@/pages/ticket/list/ticket.table.data";


export default function ProjectView(){
    const navigate = useNavigate()
    const { ProjectList } = useContext(ProjectContext)
    const { id  } = useParams();
    const [info ,setInfo] = useState<ProjectResponseProps | null>(ResponseProjectData);

    useEffect( () => {
        if(id && ProjectList) {
            setInfo(ProjectList.find( (data) => data.id == Number(id)) ?? null);
        }
    },[id,ProjectList])

    if(!info) return null;

    return <div className=" h-full p-2">
            <div className="grid grid-rows-[150px_1fr] w-full h-full bg-white border border-gray-300 shadow-2xl">
                <ProjectViewHeader data={{
                    created_at: info.created_at
                }} />
                <div className="h-full p-3">
                    <div className="w-full flex flex-col gap-5">
                        <div className="flex justify-end">
                            <div>
                                <button onClick={() => navigate("/client/ticket/create",{replace:true})} className="flex items-center gap-2 disabled:bg-blue-400 bg-primary hover:bg-secondary rounded-sm  text-white p-2 text-[14px]">
                                    <BiPlus />
                                    <p>Create Ticket</p>
                                </button>
                            </div>
                        </div>
                        <TicketTableHeader>
                            { info.tickets && info.tickets.map( (items,index) => ( <TicketTableData items={items} count={++index}/>)) }
                        </TicketTableHeader>
                    </div>
                </div>
            </div>
        </div>
}