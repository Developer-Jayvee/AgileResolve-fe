import type { Dispatch, FormEvent, ReactNode, SetStateAction } from "react";
import type { PayloadTicketProps } from "./PayloadTypes";
import type { NewProjectDataProps } from "./FormDataTypes";
import type { ProjectResponseProps, TicketResponseProps } from "./ResponseTypes";
import type { PayloadProjectProps } from "./ProjectServiceTypes";
import type { HandleDeleteType, HandleFormSubmit, HandleInputTypes } from "./GlobalTypes";

export interface RightModalContextProps {
    isOpen : boolean;
    setOpen : Dispatch<SetStateAction<boolean>>;
    setChildren : Dispatch<SetStateAction<ReactNode>>;
    children : ReactNode;

}
export type ModalSize = "sm" | "md" | "lg" | "xl" | "auto";
export type ModalPosition = "right" | "center";

export interface ModalContextProps {
    open : (config : {
        component : any | null;
        props : any;
        position : ModalPosition;
        size ?: ModalSize;
    }) => void;

}

export interface ProjectContextProps {
    isProjectLoading : boolean; 
    ProjectInitState : NewProjectDataProps;
    ProjectHandleInput : (key : keyof NewProjectDataProps , value:  number | string) => void;
    ProjectSubmitHandler : (e : FormEvent<HTMLFormElement>) => void;
    ProjectList : ProjectResponseProps[],
    ProjectErrors : Array<string>;
    ProjectMessages : string | null;
    ProjectHandleDelete : (id : number) => void;
    ProjectHandleUpdate : (id : number , formData : PayloadProjectProps) => void;
}

 
export interface TicketContextProps {
    ticketList : TicketResponseProps[];
    ticketIsLoading : boolean;
    ticketHandleInput : HandleInputTypes<PayloadTicketProps,string | number>;
    ticketInitStateForm : PayloadTicketProps;
    ticketSetInitStateForm : Dispatch<SetStateAction<PayloadTicketProps>>;
    ticketHandleSubmit : HandleFormSubmit;
    ticketErrors : Array<string>;
    ticketSetProjectID: Dispatch<SetStateAction<number | null>>;
    ticketDelete : HandleDeleteType;
}