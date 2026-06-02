
export type TicketStatusTypes = "accepted" | "rejected" | "pending";

export interface PayloadTicketProps {
    title : string;
    content : string;
    deadline : string;
    projects_id : number | null;
    created_by : number | null;
    status : TicketStatusTypes;
}