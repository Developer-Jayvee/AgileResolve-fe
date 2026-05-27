import axiosInstance from "@/config/axios.config";
import type {  PayloadProjectProps, StoreProjectProps } from "@/types/ProjectServiceTypes";

const PREFIX = "project";
export const ProjectService = {
    list : async () => await axiosInstance.get(PREFIX),
    create : async (payload : StoreProjectProps) => await axiosInstance.post(PREFIX,payload),
    delete : async (id : number) => await axiosInstance.delete(`/${PREFIX}/${id}`),
    update : async (id : number , payload : Partial<PayloadProjectProps>) => await axiosInstance.put(`${PREFIX}/${id}`,payload)
}