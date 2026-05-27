import type { Dispatch, FormEvent, ReactNode, SetStateAction } from "react";
import type { PayloadProjectProps, StoreProjectResponseProps } from "./ProjectServiceTypes";
import type { PayloadTicketProps } from "./PayloadTypes";

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
    list : Array<StoreProjectResponseProps[]>;
    setList : Dispatch<SetStateAction<StoreProjectResponseProps[]>>;
    setProjectID : Dispatch<SetStateAction<string>>;
    handleProjectSubmit : (e : FormEvent<HTMLFormElement>) => void;
    handleProjectInput : (key : keyof PayloadProjectProps , value : string | number) => void;
    getProjectList : () => void;
    errors : Array<[]>;
    isLoading : boolean;
    initProjectStateForm : PayloadProjectProps;
    successMessage : string;
}
 
export interface TicketContextProps {
    handleSubmit : () => void;
    initStateForm: PayloadTicketProps;
    formLoading : boolean;
    handleInput : (key: keyof PayloadTicketProps,value : string | number) => void;
}