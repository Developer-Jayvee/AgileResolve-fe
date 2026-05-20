import axiosInstance from "@/config/axios.config";
import type {  StoreProjectProps } from "@/types/ProjectServiceTypes";


export const ProjectService = {
    list : async () => await axiosInstance.get('/project'),
    create : async (payload : StoreProjectProps) => await axiosInstance.post("/project",payload),
    delete : async (id : number) => await axiosInstance.delete(`/project/${id}`)
}