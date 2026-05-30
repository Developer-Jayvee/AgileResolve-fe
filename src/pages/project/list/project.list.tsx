import { useContext } from "react";
import ProjectCard from "../components/project.card";
import { ProjectContext } from "@/contexts";
import { useNavigate } from "react-router-dom";


export default function ProjectList(){
    const { ProjectList , ProjectHandleDelete } = useContext(ProjectContext)
    const navigate = useNavigate();
    const openProject = (id : number) => {
        navigate(`${id}`);
    }
    return  <div className="h-full grid grid-rows-[auto_1fr] gap-4">
          <div className="p-3 bg-gray-200">
            <table className="w-full ">
              <thead>
                <tr>
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
                {ProjectList &&  ProjectList.map((projects, index) => (
                  <ProjectCard
                    onView={(id: number) => openProject(id) }
                    onDelete={(id: number) => ProjectHandleDelete(id)}
                    key={index}
                    details={{
                      title: projects.title,
                      description: projects.description,
                      id: projects.id
                    }}
    
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
}