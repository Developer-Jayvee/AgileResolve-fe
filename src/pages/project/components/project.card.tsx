import { BiFolder, BiTrash } from "react-icons/bi"
import { FaEye } from "react-icons/fa";

interface ProjectrCardProps {
    details: ProjectDetailedProps;
    onView: (id: number) => void;
    onDelete: (id: number) => void;
}
interface ProjectDetailedProps {
    title: string;
    description: string;
    id: number;
}
export default function ProjectCard({
    details, onView, onDelete
}: ProjectrCardProps) {

    return (
        <div className="hover:bg-neutral cursor-pointer my-3 h-20 w-full border border-gray-300 rounded-lg shadow p-2">
            <div className="w-full h-full grid grid-cols-[1fr_250px_1fr_1fr_1fr] place-content-center place-items-center">
                <div className=" flex items-center gap-2">
                    <div className="bg-amber-200 p-2 rounded-md">
                        <BiFolder className="text-2xl text-blue-500" />
                    </div>
                    <p>{details.title}</p>
                </div>
                <div className=" w-full ">
                    <p className="text-center overflow-hidden text-ellipsis">{details.description}</p>
                </div>
                <div >
                    <div className="flex gap-1 items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <p>Active</p>
                    </div>
                </div>
                <div  >
                    <p>May 22 2026</p>
                </div>
                <div className="flex gap-2">
                    <button onClick={() => onView(details.id)} className="flex justify-center items-center p-2 rounded-xl cursor-pointer text-white bg-green-500 hover:bg-green-600 ">
                        <FaEye />
                    </button>
                    <button onClick={() => onDelete(details.id)} className=" flex justify-center cursor-pointer bg-red-500 hover:bg-red-600 text-white p-2 rounded-xl">
                        <BiTrash />
                    </button>
                </div>
            </div>
        </div>
    )
}