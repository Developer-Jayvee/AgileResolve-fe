import type { Dispatch, FormEvent, ReactNode, SetStateAction } from "react";
import type { PayloadTicketProps } from "./PayloadTypes";
import type { NewProjectDataProps } from "./FormDataTypes";
import type { ProjectResponseProps } from "./ResponseTypes";

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
}
 
export interface TicketContextProps {
    handleSubmit : () => void;
    initStateForm: PayloadTicketProps;
    formLoading : boolean;
    handleInput : (key: keyof PayloadTicketProps,value : string | number) => void;
}