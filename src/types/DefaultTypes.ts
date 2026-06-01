
export interface TimeStampProps {
    updated_at:string;
    created_at:string;
}

export interface UserStampProps extends TimeStampProps {
    receive_by : number | null;
    created_by : number | null;
    updated_by : number | null;
} 

export interface PrimaryKeyProps {
    id: number;
    code : string;
}