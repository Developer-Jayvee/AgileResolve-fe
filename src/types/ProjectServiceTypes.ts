

export interface StoreProjectResponseProps {
    id: number;
    title : string;
    client_id : number;
    descrption : string;
    category : number;
    code : string;
} 
export interface PayloadProjectProps {
    title : string;
    description : string;
    category : number | null ;
    client_id : number;
}

export type StoreProjectProps = Omit<PayloadProjectProps,"client_id">;
