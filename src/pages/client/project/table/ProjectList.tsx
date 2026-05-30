import { useContext, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import { useNavigate } from "react-router-dom";
import { ClientContext } from "@/contexts";

export default function ProjectList() {
  const { projectList } = useContext(ClientContext);
  const navigate = useNavigate();

  const handleView = (id: number) => {
    navigate(`${id}`, { replace: true });
  };
  useEffect( () => {
    console.log(projectList);
    
  },[])
  return (
    <div className="h-full grid grid-rows-[auto_1fr] gap-4">
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
            {projectList &&  projectList.map((projects, index) => (
              <ProjectCard
                onView={(id: number) => handleView(id)}
                onDelete={(id: number) => handleView(id)}
                key={index}
                data={{
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
  );
}
