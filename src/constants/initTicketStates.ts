import type { PayloadTicketProps } from "@/types/PayloadTypes";
import type { TicketResponseProps } from "@/types/ResponseTypes";


export const ResponseTicketState : TicketResponseProps  = {
    "id": 1,
    "code": "",
    "title": "",
    "content": "",
    "deadline": "",
    "created_at": "",
    "updated_at": "",
    "receive_by": null,
    "updated_by": null,
    "projects_id": 1,
    "created_by": 1,
    "status": "pending",
    "priority" :0,
    "description" : "",
    "type" : 0
}
export const TicketListState : TicketResponseProps[] = [ResponseTicketState]

export const PayloadTicketState : PayloadTicketProps = {
    title:"",
    content:"",
    deadline:"",
    projects_id:null,
    created_by:null,
    status:"pending"

}