import { BiFolder } from "react-icons/bi";
import { CiMenuKebab } from "react-icons/ci";


interface ProjectCardProps {
    title : string;
    description ?: string;
}
export default function ProjectCard({
    title , description = ""
} : ProjectCardProps) {

    return <div className="my-3 h-20 w-full border border-gray-300 rounded-lg shadow p-2">
        <div className="w-full h-full grid grid-cols-[1fr_250px_1fr_1fr_1fr] place-content-center place-items-center">
            <div className="flex items-center gap-2">
                <div className="bg-amber-200 p-2 rounded-md">
                    <BiFolder className="text-2xl text-blue-500" />
                </div>
                <p>{title}</p>
            </div>
            <div className=" w-full">
                <p className="text-center overflow-hidden text-ellipsis">{description}</p>
            </div>
            <div>
                <div className="flex gap-1 items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <p>Active</p>
                </div>
            </div>
            <div>
                <p>May 22 2026</p>
            </div>
            <div>
                <CiMenuKebab />
            </div>
        </div>
    </div>
}