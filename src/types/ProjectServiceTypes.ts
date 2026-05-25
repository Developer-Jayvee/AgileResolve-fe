

export interface StoreProjectResponseProps {
    id: number;
    title : string;
    client_id : number;
    description : string;
    category : number;
    code : string;
    created_at : string;
} 
export interface PayloadProjectProps {
    title : string;
    description : string;
    category : number | null ;
    client_id : number;
}
export interface ProjectInfoProps {
    project :  StoreProjectResponseProps;
};
export type StoreProjectProps = Omit<PayloadProjectProps,"client_id">;
