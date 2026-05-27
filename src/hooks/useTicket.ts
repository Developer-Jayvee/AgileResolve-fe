import type { PayloadTicketProps } from "@/types/PayloadTypes";
import useInputHandler from "./useInputHandler";
import { initPayloadTicket } from "@/constants/initStates";
import useSubmitForm from "./useSubmitForm";
import TicketService from "@/services/TicketService";
import type { TicketReturnType } from "@/types/TicketTypes";
import useReturnList from "./useReturnList";
import { useEffect } from "react";

interface HookTicketProps {
  projectID: string;
}
export default function useTicket({ projectID }: HookTicketProps) {
  const { handleInput, initStateForm, setInitStateForm, resetForm } =
    useInputHandler<PayloadTicketProps>({
      formData: {
        ...initPayloadTicket,
        projects_id: "0",
        created_by: "1",
      },
    });
  const { dataList, isLoading: listLoading } = useReturnList<TicketReturnType>({
    service: TicketService.list,
  });
  const {
    handleSubmit,
    isLoading: formLoading,
    errorResponse,
    formResponse,
  } = useSubmitForm<PayloadTicketProps, TicketReturnType>({
    service: TicketService.create,
    payload: initStateForm,
    appendToList: true,
  });

  useEffect(() => {
    if (formResponse) resetForm();
  }, [formResponse]);
  useEffect(() => {
    setInitStateForm((prev) => ({ ...prev, projects_id: projectID }));
  }, [projectID]);
  return {
    handleInput,
    handleSubmit,
    listLoading,
    formResponse,
    formLoading,
    initStateForm,
    errorResponse,
    dataList,
  };
}
