import axiosInstance from "@/config/axios.config";
import type { NewProjectDataProps } from "@/types/FormDataTypes";
import type {  PayloadProjectProps } from "@/types/ProjectServiceTypes";

const PREFIX = "project";
export const ProjectService = {
    list : async () => await axiosInstance.get(PREFIX),
    create : async (payload : NewProjectDataProps) => await axiosInstance.post(PREFIX,payload),
    delete : async (id : number) => await axiosInstance.delete(`/${PREFIX}/${id}`),
    update : async (id : number , payload : PayloadProjectProps) => await axiosInstance.put(`${PREFIX}/${id}`,payload)
}