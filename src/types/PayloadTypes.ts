
export type TicketStatusTypes = "accepted" | "rejected" | "pending";

export interface PayloadTicketProps {
    title : string;
    content : string;
    deadline : string;
    projects_id : string;
    created_by : string;
    status : TicketStatusTypes;
}