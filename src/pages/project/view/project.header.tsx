import CenterModal from "@/components/layouts/CenterModal";
import { dateFormatter } from "@/utils/utilities.util";
import { useContext, useState , useEffect} from "react";
import { BiFolder } from "react-icons/bi";
import { BsPencilFill } from "react-icons/bs";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";
import EditProjectModalContent from "../edit/edit.project";
import { ProjectContext } from "@/contexts";
import type { PayloadProjectProps } from "@/types/ProjectServiceTypes";
import useInputHandler from "@/hooks/useInputHandler";
import { NewProjectData } from "@/constants/initProjectStates";
export interface ProjectHeaderProps {
  data: {
    created_at: string;
  }
}
export default function ProjectViewHeader({ data } : ProjectHeaderProps) {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { handleInput , initStateForm , setInitStateForm } = useInputHandler<PayloadProjectProps>({ formData : NewProjectData });
  const {
    ProjectErrors,
    isProjectLoading,
    ProjectMessages,
    ProjectList,
    ProjectHandleUpdate
  } = useContext(ProjectContext);


  useEffect( () => {
    if(id && ProjectList) {
        const projectInfo = ProjectList.find( (data) => data.id == Number(id));
        console.log(projectInfo);
        if(projectInfo){
            setInitStateForm({
                title: projectInfo.title,
                description: projectInfo.description,
                category: Number(projectInfo.category),
                client_id: projectInfo.client_id
            })
        }
    }
  },[id,ProjectList])

  return (<>
    <div className="grid grid-cols-[100px_1fr] w-full p-3 gap-x-2">
      <div>
        <div className="flex justify-center items-center bg-amber-200 p-2 h-full rounded-md">
          <BiFolder className="text-[4rem] text-blue-500" />
        </div>
      </div>
      <div className="p-2 grid grid-cols-[300px_1fr]">
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl font-semibold">{initStateForm?.title}</h1>
          <p className="text-md font-light">{initStateForm?.description}</p>
          <div className="flex gap-2 items-end h-full">
            <button
              onClick={() => navigate('..', {
                relative: 'path',
              })}
              type="button"
              className="flex gap-2 items-center bg-blue-500 hover:bg-blue-600 text-white px-3 rounded-sm shadow-2xl"
            >
              <IoIosArrowDropleftCircle />
              <span>Return</span>
            </button>
            <button
                onClick={() => setIsModalOpen(true)}
              type="button"
              className="flex gap-2 items-center bg-green-500 hover:bg-green-600 text-white px-3 rounded-sm shadow-2xl"
            >
              <BsPencilFill />
              <span>Edit</span>
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-1 items-end">
          <h3 className="text-sm text-gray-500 ">
            {dateFormatter(data?.created_at)}
          </h3>
          <div className="flex gap-1 items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <p className="text-sm text-gray-500">Active</p>
          </div>
        </div>
      </div>
    </div>
    {
      initStateForm && (
      <CenterModal isModalOpen={isModalOpen} setModalOpen={setIsModalOpen} size="xl">
        <EditProjectModalContent
          config={{
            errors: ProjectErrors,
            messages: ProjectMessages,
            isLoading: isProjectLoading,
            title: "Edit Project",
            description: "Modify the project details"
          }}
          formData={initStateForm}
          handleChange={handleInput}
          onUpdate={ProjectHandleUpdate}
          onSubmit={() => {}}
      />
      </CenterModal>
      )
    }
  </>)
}