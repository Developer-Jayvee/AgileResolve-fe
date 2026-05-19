import ProjectCard from "./ProjectCard";


export default function ProjectList() {

    return <div className="h-full grid grid-rows-[auto_1fr] gap-4">
        <div className="p-3 bg-gray-200">
            <table className="w-full ">
                <thead>
                    <tr >
                        <th>PROJECT</th>
                        <th>DESCRIPTION</th>
                        <th>STATUS</th>
                        <th>CREATED ON</th>
                        <th>ACTIONS</th>
                    </tr>
                </thead>
            </table>
        </div>
        <div className="w-full  ">
            <div className="min-h-0 h-full overflow-auto">
                <div className="max-h-0 overflow-hiddemn ">
                    <ProjectCard />
                </div>
            </div>
        </div>

    </div>
}