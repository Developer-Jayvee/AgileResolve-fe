import type { TimeStampProps } from "./DefaultTypes";


export interface ProjectResponseProps extends TimeStampProps{
    title: string;
    client_id: number;
    description: string;
    category: number | null;
    code: string;
    id: number;
}