import Button from "@/components/Button";
import DefaultInputText from "@/components/DefaultInputText";
import DefaultTextArea from "@/components/DefaultTextArea";
import useTicketProvider from "@/hooks/useTicketProvider";
import type { TicketContextProps } from "@/types/ContextTypes";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function FormLayout() {
  const { project_id , ticket_id } = useParams<{ project_id : string; ticket_id ?: string; }>();
  const {
    ticketHandleSubmit,
    ticketInitStateForm,
    ticketHandleInput,
    ticketErrors,
    ticketSetProjectID,
    ticketIsLoading,
    ticketSetInitStateForm,
    ticketList
  } = useTicketProvider() as TicketContextProps;

  useEffect(() => ticketSetProjectID(Number(project_id)), [project_id]);

  useEffect(() => {
    if(ticket_id && ticketList){
        const details = ticketList.find( (data) => data.id == Number(ticket_id));
        if(!details) return; 
        ticketSetInitStateForm({
            title: details?.title,
            content: details?.content,
            deadline: details?.deadline,
            projects_id: details?.projects_id,
            created_by : details?.created_by,
            status: details?.status,
            id : details.id
        })
    }
  },[ticket_id,ticketList])
  if (!project_id) return <p>Loading...</p>;

  return (
    <div className="p-4 h-full">
      <div className="flex h-full flex-col gap-2">
        <div className="flex justify-between">
          <div>
            <h1 className="font-bold text-2xl">Create new ticket</h1>
            <p className="font-light text-md">Issue new ticket</p>
          </div>
        </div>
        <div className="grow  h-full p-2 w-full  ">
          <form onSubmit={ticketHandleSubmit} className="h-full flex flex-col gap-5">
            <div className="grid grid-cols-[1fr_auto] gap-x-10">
              <div>
                <DefaultInputText
                  isHorizontal={true}
                  isRequired={true}
                  label={{ labelName: "Title" }}
                  input={{
                    defaultName: "title",
                    defaultValue: ticketInitStateForm?.title,
                    placeholder: "Ticket Title",
                    onChangeInput: (e) =>
                      ticketHandleInput("title", e.target.value),
                  }}
                />
                <div>
                  {ticketErrors?.title &&
                    ticketErrors?.title.map((err) => (
                      <p className="text-sm text-red-500">{err}</p>
                    ))}
                </div>
              </div>
              <div>
                <div className="flex gap-2 items-center">
                  <label className="font-semibold text-lg ">Deadline</label>
                  <input
                    type="date"
                    onChange={(e) =>
                      ticketHandleInput("deadline", e.target.value)
                    }
                    value={ticketInitStateForm?.deadline}
                    className="border border-gray-300 p-2 w-full "
                  />
                </div>
                <div>
                  {ticketErrors?.deadline &&
                    ticketErrors?.deadline.map((err) => (
                      <p className="text-sm text-red-500">{err}</p>
                    ))}
                </div>
              </div>
            </div>
            <div className="grow ">
              <DefaultTextArea
                customClass="h-full"
                isRequired={true}
                label={{ labelName: "Content" }}
                textarea={{
                  defaultName: "content",
                  defaultTextAreaValue: ticketInitStateForm?.content,
                  placeholder: "Please input content...",
                  customClass: "outline-0",
                  onChangeInput: (e) =>
                    ticketHandleInput("content", e.target.value),
                }}
              />
              <div>
                {ticketErrors?.content &&
                  ticketErrors?.content.map((err) => (
                    <p className="text-sm text-red-500">{err}</p>
                  ))}
              </div>
            </div>
            <div className="flex justify-end gap-2 items-end">
              <button
                type="button"
                className="py-1 px-4 bg-yellow-500  text-white rounded-md "
              >
                Clear
              </button>
              <Button
                isLoading={ticketIsLoading}
                buttonText="Save"
                buttonType="submit"
                customClass="py-1 px-4 bg-primary text-white rounded-md "
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
