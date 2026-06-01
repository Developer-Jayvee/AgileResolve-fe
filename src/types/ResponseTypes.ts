import type { PrimaryKeyProps, TimeStampProps, UserStampProps } from "./DefaultTypes";


export interface ProjectResponseProps extends TimeStampProps{
    title: string;
    client_id: number;
    description: string;
    category: number | null;
    code: string;
    id: number;
    tickets: TicketResponseProps[]
}

export interface TicketResponseProps extends UserStampProps , PrimaryKeyProps{
    title: string;
    content : string;
    deadline : string;
    description: string;
    projects_id: number;
    status: "pending" | "open";
    priority: number;
    type: number;
}