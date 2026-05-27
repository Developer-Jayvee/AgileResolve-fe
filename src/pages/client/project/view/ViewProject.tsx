import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { StoreProjectResponseProps } from "@/types/ProjectServiceTypes";
import ViewProjectHeader from "./ViewProjectHeader";
import { ModalContext, ProjectContext } from "@/contexts";
import { BiPlus } from "react-icons/bi";
import TicketsTable from "../table/Ticket/TicketsTable";
import { initStoreResponse } from "@/constants/initStates";
import CreateTicket from "../create/CreateTicket";


const ViewProject = () => {
    const { id } = useParams();
    const { list, setProjectID } = useContext(ProjectContext)
    const { open } = useContext(ModalContext);
    const [projectInfo, setProjectInfo] = useState<StoreProjectResponseProps>(initStoreResponse);


    const handleOpenCenterModal = () => {
        open({
            component: CreateTicket,
            props: {},
            position: 'center',
            size: "xl"
        })
    }
    useEffect(() => {
        if (list.length > 0) {
            setProjectInfo(
                list.find((item) => item.id === Number(id))
            );
        }
    }, [list])
    useEffect(() => setProjectID(String(id)), [])
    if (projectInfo === null) return null;

    return <div className=" h-full p-2">
        <div className="grid grid-rows-[150px_1fr] w-full h-full bg-white border border-gray-300 shadow-2xl">
            <ViewProjectHeader project={projectInfo} />
            <div className="h-full p-3">
                <div className="w-full flex flex-col gap-5">
                    <div className="flex justify-end">
                        <div>
                            <button onClick={() => handleOpenCenterModal()} className="flex items-center gap-2 disabled:bg-blue-400 bg-primary hover:bg-secondary rounded-sm  text-white p-2 text-[14px]">
                                <BiPlus />
                                <p>Create Ticket</p>
                            </button>
                        </div>
                    </div>
                    <TicketsTable list={projectInfo.tickets} />
                </div>
            </div>
        </div>
    </div>
}

export default ViewProject;