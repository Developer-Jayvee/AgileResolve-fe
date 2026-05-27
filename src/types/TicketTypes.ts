import type { TicketStatusTypes } from "./PayloadTypes";

export interface TimeStampTypes { 
    updated_at : string;
    created_at : string;
}

export interface TicketReturnType extends TimeStampTypes {
    title : string;
    content : string;
    deadline : string;
    projects_id : number;
    created_by : number;
    status:TicketStatusTypes;
    code : string;
    id : number;
}
export interface TicketTable {
    list : TicketReturnType[];
}
export interface CreateTicketProps {
    id : number;
}

export interface TicketBodyTypes { 
    data : TicketReturnType;
}