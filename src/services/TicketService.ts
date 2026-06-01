import axiosInstance from "@/config/axios.config";
import type { PayloadTicketProps } from "@/types/PayloadTypes";
// import type { ResourceCrudTypes } from "@/types/ResourceServiceTypes";
// import type { TicketReturnType } from "@/types/TicketTypes";

const PREFIX = "ticket";
const TicketService
// : ResourceCrudTypes<
//   PayloadTicketProps,
//   number,
//   TicketReturnType
// > 
= {
  list: async () => await axiosInstance.get(PREFIX),
  create: async (payload: PayloadTicketProps) =>
    await axiosInstance.post(PREFIX, payload),
  delete: async (id: number) => await axiosInstance.delete(`${PREFIX}/${id}`),
  update: async (id: number) => await axiosInstance.patch(`${PREFIX}/${id}`),
};

export default TicketService;
