

export interface LoginServiceProps {
    username : string;
    password : string;
}
export interface UserInfo {
    username: string;
    email: string;
    first_name:string;
    last_name: string;
    middle_initial: string | null  ;
    birthdate: string;
    role_id: number;
}
export interface LoginServiceResponse {
    token : string,
    user : UserInfo & { id : number }
    message : string;
}