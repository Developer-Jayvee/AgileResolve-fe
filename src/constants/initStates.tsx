import type { ModalContextProps, RightModalContextProps } from "@/types/ContextTypes";
import type { PayloadTicketProps } from "@/types/PayloadTypes";
import type { PayloadProjectProps, StoreProjectResponseProps } from "@/types/ProjectServiceTypes";

export const initStoreProjectResponse : StoreProjectResponseProps = {
    id: 0,
    title : "",
    client_id : 0,
    description : "",
    category : 0,
    code : "",
    created_at : "",
    tickets : []
}


export const initStoreProject : PayloadProjectProps = {
    title:"",
    description:"",
    category:0,
    client_id : 1
}


export const initModal : RightModalContextProps  = {
    isOpen : false,
    setOpen : () => false,
    setChildren : () => <></>,
    children : <></>
}
export const initModalContext : ModalContextProps = {
    rightModal : initModal,
    centerModal : {
        ...initModal,
        size : "sm",
        setModalSize :() => 'sm'
    } 
}

export const initModalPxSizes : Record<string,string> =  {
    'sm' : 'w-100',
    'md' : 'w-[400px]',
    'lg' : 'w-[500px]',
    'xl' : 'w-[600px]',
    'auto' : 'w-auto'
}

export const initPayloadTicket : PayloadTicketProps = {
    title : "",
    content : "",
    deadline : "",
    status : "pending",
    projects_id : "0",
    created_by : ""
}