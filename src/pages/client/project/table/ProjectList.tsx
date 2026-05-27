import { useContext } from "react";
import ProjectCard from "./ProjectCard";
import useProjectHandler from "@/hooks/useProjectHandler";
import { useNavigate } from "react-router-dom";
import { ProjectContext } from "@/contexts";

export default function ProjectList() {
  const { list, setList } = useContext(ProjectContext);
  const { deleteProject } = useProjectHandler();
  const navigate = useNavigate();
  const handleDelete = async (id: number) => {
    await deleteProject(id).then((result) => {
      if (result) {
        setList((prev) => prev.filter((item) => item.id !== id));
      }
    });
  };
  const handleView = (id: number) => {
    navigate(`view/${id}`, { replace: true });
  };
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
            {list.map((projects, index) => (
              <ProjectCard
                onView={(id: number) => handleView(id)}
                onDelete={(id: number) => handleDelete(id)}
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
