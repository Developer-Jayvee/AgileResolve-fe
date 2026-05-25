import { BiFolder, BiTrash } from "react-icons/bi";


interface ProjectCardProps {
    id : number;
    title : string;
    description ?: string;

    onDelete : (id : number) => void;
    onView : (id : number) => void;
}
export default function ProjectCard({
   id, title , description = "" , onDelete , onView
} : ProjectCardProps) {
    
    return <div className="hover:bg-neutral cursor-pointer my-3 h-20 w-full border border-gray-300 rounded-lg shadow p-2">
        <div className="w-full h-full grid grid-cols-[1fr_250px_1fr_1fr_1fr] place-content-center place-items-center">
            <div  onClick={() => onView(id) } className="flex items-center gap-2">
                <div className="bg-amber-200 p-2 rounded-md">
                    <BiFolder className="text-2xl text-blue-500" />
                </div>
                <p>{title}</p>
            </div>
            <div  onClick={() => onView(id) } className=" w-full">
                <p className="text-center overflow-hidden text-ellipsis">{description}</p>
            </div>
            <div  onClick={() => onView(id) }>
                <div className="flex gap-1 items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <p>Active</p>
                </div>
            </div>
            <div  onClick={() => onView(id) }>
                <p>May 22 2026</p>
            </div>
            <div>
                <button onClick={() => onDelete(id)} className=" flex justify-center cursor-pointer bg-red-500 hover:bg-red-600 text-white p-2 rounded-xl">
                    <BiTrash/>
                </button>
            </div>
        </div>
    </div>
}